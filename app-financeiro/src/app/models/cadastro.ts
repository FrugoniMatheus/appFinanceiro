export enum TipoTransacao {
    RECEBER = 'RECEBER',
    PAGAR = 'PAGAR'
}


export interface Cadastro {
    nome: String,
    endereco: String,
    tipo?: TipoTransacao
}