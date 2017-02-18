import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_report {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: any,
        public arquivo?: string,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
