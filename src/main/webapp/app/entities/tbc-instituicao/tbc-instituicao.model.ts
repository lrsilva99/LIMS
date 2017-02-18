export class Tbc_instituicao {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public sigla?: string,
        public uf?: string,
        public endereco?: string,
        public telefone?: string,
        public removido?: boolean,
        public email?: string,
    ) { }
}
