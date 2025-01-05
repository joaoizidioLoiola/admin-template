'use client';
import { useRouter } from 'next/navigation';
import firebase from '@/firebase/config';
import Usuario from '@/model/Usuario';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface AuthContextProps {
  usuario?: Usuario | undefined | null;
  carregando?: boolean;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, senha: string) => Promise<void>;
  cadastrar?: (email: string, senha: string) => Promise<void>;
  logout?: () => Promise<void>;
}
const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  const provedor =
    usuarioFirebase.providerData && usuarioFirebase.providerData.length > 0
      ? (usuarioFirebase.providerData[0]?.providerId ?? '')
      : '';

  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName ?? '',
    email: usuarioFirebase.email ?? '',
    token,
    provedor,
    imagemUrl: usuarioFirebase.photoURL ?? '',
    tipoUsuario: 1,
    cpf: '',
    dataNascimento: '',
    endereco: [],
    telefone: '',
    nivelAcesso: 1,
    permissoes: [],
    senha: '',
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set('admin-template', String(logado), {
      expires: 2,
    });
  } else {
    Cookies.remove('admin-template');
  }
}

export function AuthProvider(props: { children: React.ReactNode }) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const router = useRouter();

  async function configurarSessao(usuarioFirebase: firebase.User | null) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      await configurarSessao(resp.user);
      router.push('/');
    } finally {
      setCarregando(false);
    }
  }

  async function login(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha);
      await configurarSessao(resp.user);
      router.push('/');
    } finally {
      setCarregando(false);
    }
  }

  async function cadastrar(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);
      await configurarSessao(resp.user);
      router.push('/');
    } finally {
      setCarregando(false);
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template')) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();
    } else {
      setCarregando(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
        login,
        cadastrar,
        logout,
        carregando,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
