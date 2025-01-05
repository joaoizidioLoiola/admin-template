/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (evento: React.MouseEvent<HTMLLIElement>) => void;
  isSair?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  const hoverClass = props.isSair
    ? 'hover:bg-red-400'
    : 'hover:bg-[#99d9d9] hover:text-white';

  return (
    <li
      onClick={props.onClick}
      className={`w-full cursor-pointer text-gray-600 ${hoverClass} dark:text-gray-200 dark:hover:bg-gray-700 ${props.className}`}
    >
      <Link
        href={props.url ?? '/'}
        className="flex h-24 w-24 flex-col items-center justify-center"
      >
        {props.icone}
        <span className="text-sm font-light">{props.texto}</span>
      </Link>
    </li>
  );
}
