'use client';

import { IconeLua, IconeSol } from '../icons';

interface BotaoAlternarTemaProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div
      onClick={props.alternarTema}
      className="gradient-to-r from hidden h-8 w-14 cursor-pointer items-center rounded-full bg-yellow-300 to-yellow-600 p-1 text-black sm:flex lg:w-24"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full text-orange-500">
        {IconeSol(4)}
      </div>
      <div className="ml-2 hidden items-center text-slate-900 lg:flex">
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className="gradient-to-r from hidden h-8 w-14 cursor-pointer items-center justify-end rounded-full bg-gray-500 to-gray-900 p-1 text-black sm:flex lg:w-24"
    >
      <div className="mr-2 hidden items-center text-gray-300 lg:flex">
        <span className="text-sm">Escuro</span>
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-yellow-300">
        {IconeLua(4)}
      </div>
    </div>
  );
}
