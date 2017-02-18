import { Tbc_instituicao } from '../tbc-instituicao';
import { Tbc_sub_grupo } from '../tbc-sub-grupo';
import { Tbc_grupo_analise } from '../tbc-grupo-analise';
import { Tbc_tipo_cadastro } from '../tbc-tipo-cadastro';
export class Tbc_formulario {
    constructor(
        public id?: number,
        public nome?: string,
        public metodo?: string,
        public descricao?: string,
        public diasliberacao?: number,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
        public tbc_sub_grupo?: Tbc_sub_grupo,
        public tbc_grupo_analise?: Tbc_grupo_analise,
        public tbc_tipo_cadastro?: Tbc_tipo_cadastro,
    ) { }
}
