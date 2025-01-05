'use client';
import MenuLateral from './MenuLateral';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import useAppdata from '@/data/hook/useAppData';
import ForcarAutenticacao from '../auth/ForcarAutenticacao';

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppdata();

  return (
    <ForcarAutenticacao>
      <div className={`${tema} flex h-screen w-screen`}>
        <MenuLateral />
        <div className="flex w-full flex-col bg-gray-300 p-7 dark:bg-gray-800">
          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
    </ForcarAutenticacao>
  );
}
