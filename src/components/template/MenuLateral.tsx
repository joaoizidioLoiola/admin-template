'use client';
import useAuth from '@/data/hook/useAuth';
import {
  IconeConfig,
  IconeHome,
  IconePerfil,
  IconeNotificacao,
  IconeSair,
} from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function MenuLateral() {
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex h-24 w-24 flex-col items-center justify-center bg-gradient-to-tr from-[#46b470] to-[#0e5037]">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeConfig} />
        <MenuItem url="/perfil" texto="Perfil" icone={IconePerfil} />
        <MenuItem
          url="/notificacoes"
          texto="Notificações"
          icone={IconeNotificacao}
        />
      </ul>
      <ul className="">
        <MenuItem
          className="text-red-600 hover:bg-red-400 hover:text-white dark:text-red-500 dark:hover:text-red-300"
          onClick={logout}
          texto="Sair"
          icone={IconeSair}
          isSair={true}
        />
      </ul>
    </aside>
  );
}
