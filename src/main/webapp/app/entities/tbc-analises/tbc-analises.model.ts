import { Tbc_sub_grupo } from '../tbc-sub-grupo';
import { Tbc_grupo_analise } from '../tbc-grupo-analise';
import { Tbc_tipo_cadastro } from '../tbc-tipo-cadastro';
import { Tbc_instituicao } from '../tbc-instituicao';
import { Tbc_report } from '../tbc-report';
export class Tbc_analises {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: any,
        public numerodias?: number,
        public metpop?: string,
        public removido?: boolean,
        public tercerizado?: boolean,
        public directiva_data_atu?: any,
        public tbc_sub_grupo?: Tbc_sub_grupo,
        public tbc_grupo_analise?: Tbc_grupo_analise,
        public tbc_tipo_cadastro?: Tbc_tipo_cadastro,
        public tbc_instituicao?: Tbc_instituicao,
        public tbc_report?: Tbc_report,
    ) { }
}
