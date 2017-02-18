import { Tbc_instituicao } from '../tbc-instituicao';
import { Tbc_tipo_campo } from '../tbc-tipo-campo';
import { Tbc_analises } from '../tbc-analises';
export class Tbc_analises_componente {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: any,
        public linha?: number,
        public unidade_medida?: string,
        public valor_padrao?: any,
        public configuracao?: any,
        public tbc_instituicao?: Tbc_instituicao,
        public tbc_tipo_campo?: Tbc_tipo_campo,
        public tbc_analises?: Tbc_analises,
    ) { }
}
