import { ImpostoLivro } from "./impostos/ImpostoLivro";
import { NotificacaoEmail } from "./notificacoes/NotificacaoEmail";
import { PagamentoCripto } from "./pagamentos/PagamentoCriptomoeda";
import { PedidoService } from "./PedidoService";

const impostoCobrado = new ImpostoLivro()
const meioPagamento = new PagamentoCripto()
const notificador = new NotificacaoEmail()

const servico = new PedidoService(impostoCobrado, meioPagamento, notificador) 

// pedido 1 = 2 livros de $30 com imposto de 0% 
const pedido1 = {
    preco: 60,
    quantidade: 2
}

servico.processarPedido(pedido1.preco, pedido1.quantidade)