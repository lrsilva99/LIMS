import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_grupo_cliente {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: any,
        public removido?: boolean,
        public responsavel?: any,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
