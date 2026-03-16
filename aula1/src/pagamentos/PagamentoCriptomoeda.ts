import { IProcessadorPagamentos } from "./IProcessadorPagamento";


export class PagamentoCripto implements IProcessadorPagamentos{
    executar(valor: number): void {
        console.log("Processando pagamento via Criptomoeda...")
    }
}