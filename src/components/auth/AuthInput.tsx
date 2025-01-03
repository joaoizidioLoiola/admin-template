/* eslint-disable @typescript-eslint/no-explicit-any */

interface AuthInputProps {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  tipo?: 'text' | 'email' | 'password';
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.naoRenderizarQuando ? null : (
    <div className="mt-4 flex flex-col">
      <label>{props.label}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className="rounded-lg border border-gray-400 bg-gray-200 px-4 py-3 focus:border-indigo-500 focus:bg-white focus:outline-none"
      />
    </div>
  );
}
