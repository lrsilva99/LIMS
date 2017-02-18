import { Tbc_instituicao } from '../tbc-instituicao';
export class Tbc_relatorio_ensaio {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: any,
        public caminho?: string,
        public removido?: boolean,
        public tbc_instituicao?: Tbc_instituicao,
    ) { }
}
