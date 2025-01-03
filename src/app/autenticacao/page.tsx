'use client';
import AuthInput from '@/components/auth/AuthInput';
import IconGoogle, { IconSaude } from '../../components/icons/index';
import { useState } from 'react';

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function submeter() {
    if (modo === 'login') {
      console.log('Logando com', email, senha);
    } else {
      console.log('Cadastrando com', email, senha);
    }
  }

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="relative hidden h-screen w-2/3 bg-[#99d9d9] lg:flex">
        <IconSaude />
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="mb-2 text-8xl font-bold text-white">
            Centro Médico Sul
          </h1>
          <h2 className="text-2xl font-semibold text-black">
            Onde a saúde da população vem em primeiro lugar
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="w-full max-w-[400px] self-center">
          <h1 className="mb-5 text-2xl font-bold">
            {modo === 'login'
              ? 'Entre com sua conta'
              : 'Cadastre-se na plataforma'}
          </h1>
          <AuthInput
            label="Email"
            tipo="email"
            valor={email}
            valorMudou={setEmail}
          />
          <AuthInput
            label="Senha"
            tipo="password"
            valor={senha}
            valorMudou={setSenha}
          />
          <div className="mt-4 flex flex-col items-center justify-center">
            <button
              onClick={submeter}
              className="mt-6 flex w-3/4 items-center justify-center rounded-lg bg-[#99d9d9] px-4 py-2 text-white hover:bg-[#5da8a8]"
            >
              {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr className="my-6 w-full border-gray-300" />

            <button
              onClick={submeter}
              className="mt-2 flex w-2/4 items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-700"
            >
              {' '}
              Entrar com Google
              <IconGoogle />
            </button>
            {modo === 'login' ? (
              <p className="mt-8 p-1">
                Novo por aqui ?
                <a
                  onClick={() => setModo('cadastro')}
                  className="cursor-pointer font-semibold text-[#99d9d9] hover:text-[#5da8a8]"
                >
                  {' '}
                  Criar uma conta gratuitamente
                </a>
              </p>
            ) : (
              <p className="mt-8 p-1">
                Já tem uma conta ?
                <a
                  onClick={() => setModo('login')}
                  className="ml-1 cursor-pointer font-semibold text-[#99d9d9] hover:text-[#5da8a8]"
                >
                  {' '}
                  Entre com seu login
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}