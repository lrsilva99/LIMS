import { Tbc_frases } from '../tbc-frases';
export class Tbc_frases_opcoes {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public removido?: boolean,
        public tbc_frases?: Tbc_frases,
    ) { }
}
