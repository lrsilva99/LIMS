import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_sub_grupo {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public sigla?: string,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
