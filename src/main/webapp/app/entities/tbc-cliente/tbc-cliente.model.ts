import { Tbc_instituicao } from '../tbc-instituicao';
import { Tbc_grupo_cliente } from '../tbc-grupo-cliente';
export class Tbc_cliente {
    constructor(
        public id?: number,
        public nome?: string,
        public cep?: string,
        public endereco?: any,
        public email?: any,
        public imprimir?: boolean,
        public enviar_email?: boolean,
        public directiva_data_atu?: any,
        public cpf_cnpj?: string,
        public codigo_cliente?: string,
        public removido?: boolean,
        public bairro?: string,
        public bloquear?: boolean,
        public descricao?: any,
        public tbc_instituicao?: Tbc_instituicao,
        public tbc_grupo_cliente?: Tbc_grupo_cliente,
    ) { }
}
