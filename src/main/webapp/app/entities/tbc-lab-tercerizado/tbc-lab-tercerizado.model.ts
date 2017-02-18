import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_lab_tercerizado {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: any,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
