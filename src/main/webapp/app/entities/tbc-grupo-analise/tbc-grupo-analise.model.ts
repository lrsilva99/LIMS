import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_grupo_analise {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
