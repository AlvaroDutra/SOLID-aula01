import { ICalcularImposto } from "./interfaces/ICalcularImposto";
import { INotificador } from "./interfaces/INotificador";
import { IProcessadorPagamentos } from "./interfaces/IProcessadorPagamento";

export class PedidoService{
    private imposto: ICalcularImposto;
    private pagamento: IProcessadorPagamentos;
    private notificacao: INotificador;

    constructor (imposto: ICalcularImposto, pagamento: IProcessadorPagamentos, notificacao: INotificador){
        this.imposto = imposto;
        this.pagamento = pagamento;
        this.notificacao = notificacao;
    }

    processarPedido(preco: number, quantidade: number): void{
        let total = preco * quantidade;
        let impostoItem = this.imposto.calcular(total);
        let valorCompra = total + impostoItem;
        this.pagamento.executar(valorCompra);
        this.notificacao.enviar(`Compra no valor de ${valorCompra} aprovada.`)
    }
}