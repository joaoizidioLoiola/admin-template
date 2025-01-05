export enum TipoUsuario {
  PACIENTE = 1,
  MEDICO = 2,
  ADMIN = 3,
}

interface UsuarioBase {
  uid: string;
  nome: string;
  token: string;
  provedor: string;
  email: string;
  senha: string;
  cpf: string;
  dataNascimento: string;
  endereco: Endereco[];
  telefone: string;
  imagemUrl: string;
  tipoUsuario: TipoUsuario;
}

export interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface Paciente extends UsuarioBase {
  convenio?: string;
  numeroCarteirinha?: string;
  historicoConsultas?: string[];
}

export interface Medico extends UsuarioBase {
  crm: string;
  especialidade: string;
  horarioAtendimento?: HorarioAtendimento[];
}

export interface Admin extends UsuarioBase {
  nivelAcesso: number;
  permissoes: string[];
}

export interface HorarioAtendimento {
  diaSemana: number;
  inicio: string;
  fim: string;
}

export type Usuario = Paciente | Medico | Admin;

export default Usuario;
