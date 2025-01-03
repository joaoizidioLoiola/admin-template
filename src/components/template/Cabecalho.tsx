import AppContext from '@/data/context/AppContext';
import BotaoAlternarTema from './BotaoAlternarTema';
import Titulo from './Titulo';
import { useContext } from 'react';

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const { tema, alternarTema } = useContext(AppContext);

  return (
    <div className="flex">
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className="flex flex-grow justify-end">
        <BotaoAlternarTema
          tema={tema ?? 'claro'}
          alternarTema={alternarTema ?? (() => {})}
        />
      </div>
    </div>
  );
}
