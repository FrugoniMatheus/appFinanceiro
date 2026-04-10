export enum TipoPagamento {
    CARTAO = "CARTAO",
    DINHEIRO = "DINHEIRO",
    BOLETO = "BOLETO",
    PIX = "PIX"
}


export interface Cliente{
    nomeCliente: string,
    dataVencimento: string,
    pagamento?: TipoPagamento,
    valor: number
}