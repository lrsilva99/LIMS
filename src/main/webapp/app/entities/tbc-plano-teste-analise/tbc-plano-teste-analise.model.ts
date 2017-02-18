import { Tbc_plano_teste } from '../tbc-plano-teste';
import { Tbc_analises } from '../tbc-analises';
export class Tbc_plano_teste_analise {
    constructor(
        public id?: number,
        public ordem?: number,
        public tbc_plano_teste?: Tbc_plano_teste,
        public tbc_analises?: Tbc_analises,
    ) { }
}
