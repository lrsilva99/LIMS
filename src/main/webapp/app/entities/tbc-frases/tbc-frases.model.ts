import { Tbc_instituicao } from '../tbc-instituicao';
import { Tbc_sub_grupo } from '../tbc-sub-grupo';
export class Tbc_frases {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
        public tbc_sub_grupo?: Tbc_sub_grupo,
    ) { }
}
