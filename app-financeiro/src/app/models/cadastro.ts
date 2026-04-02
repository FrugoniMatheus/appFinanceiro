export enum TipoTransacao {
    RECEBER = 'RECEBER',
    PAGAR = 'PAGAR'
}


export interface Cadastro {
    nome: String,
    tipo : TipoTransacao;
}