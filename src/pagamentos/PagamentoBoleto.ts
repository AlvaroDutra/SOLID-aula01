import { IProcessadorPagamentos } from "../interfaces/IProcessadorPagamento";


export class PagamentoBoleto implements IProcessadorPagamentos{
    executar(valor: number): void {
        console.log("Processando pagamento via boleto...")
    }
}