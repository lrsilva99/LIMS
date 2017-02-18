import { Tbc_tipo_cadastro } from '../tbc-tipo-cadastro';
import { Tbc_sub_grupo } from '../tbc-sub-grupo';
import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_plano_teste {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: any,
        public removido?: boolean,
        public tbc_tipo_cadastro?: Tbc_tipo_cadastro,
        public tbc_sub_grupo?: Tbc_sub_grupo,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
