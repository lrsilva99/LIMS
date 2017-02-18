import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_tipo_cadastro {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
