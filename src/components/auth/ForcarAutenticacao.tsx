'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import loading from '../../../public/loading.svg';
import useAuth from '@/data/hook/useAuth';
import { useRouter } from 'next/navigation';

interface ForcarAutenticacaoProps {
  children: React.ReactNode;
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps) {
  const { usuario, carregando } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!carregando && !usuario?.email) {
      router.push('/autenticacao');
    }
  }, [carregando, usuario, router]);

  function renderizarConteudo() {
    return <>{props.children}</>;
  }

  function renderizarCarregando() {
    return (
      <div className="flex h-screen items-center justify-center">
        <Image src={loading} alt="Carregando..." />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else {
    return renderizarCarregando();
  }
}
