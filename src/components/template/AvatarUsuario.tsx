import Link from 'next/link';
import Image from 'next/image';
import useAuth from '@/data/hook/useAuth';

interface AvatarUsuarioProps {
  className?: string;
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth();
  const imagemUrl =
    usuario?.imagemUrl && usuario.imagemUrl.trim() !== ''
      ? usuario.imagemUrl
      : '/images/avatar.svg';

  return (
    <Link href={'/perfil'}>
      <Image
        src={imagemUrl}
        alt={'Avatar do usuário'}
        width={20}
        height={20}
        className={`h-8 w-8 cursor-pointer rounded-full bg-slate-500 p-1 dark:bg-slate-200 ${props.className}`}
      />
    </Link>
  );
}
