# Atividade Prática - Análise e Refatoração

## Contexo

Você recebeu o código abaixo de um sistema de gerenciamento de pedidos de uma loja. O código funciona, mas possui violações claras dos princípios SRP e OCP. Sua tarefa é identificar as violações e
refatorar o código aplicando ambos os princípios.

~~~ typescript
class ProcessadorPedido {
    calcularTotal(tipoProduto: string, preco: number, quantidade: number): number {
        let total = preco * quantidade;
        switch (tipoProduto) {
            case "ELETRONICO":
                total += total * 0.15; // 15% imposto
                break;
            case "ALIMENTO":
                total += total * 0.05; // 5% imposto
                break;
            case "VESTUARIO":
                total += total * 0.10; // 10% imposto
                break;
        }
    return total;
    }

    processarPagamento(formaPagamento: string, valor: number): void {
        switch (formaPagamento) {
            case "CARTAO_CREDITO":
                console.log(`Processando cartão: R$ ${valor}`);
                break;
            case "BOLETO":
                console.log(`Gerando boleto: R$ ${valor}`);
                break;
            case "PIX":
                console.log(`Gerando QR Code PIX: R$ ${valor}`);
                break;
        }
    }
    enviarConfirmacao(email: string, valor: number): void {
        console.log(`Enviando email para ${email}: Seu pedido de R$ ${valor} foi confirmado!`);
    }
}
~~~

## Análise

O código apresenta violaçẽos aos principios **SOLID**, principalmente ao **Pricipio de Responsabilidade Única (SRP)** e o **Pricipio *Open/Close* (OCP)**.

Sendo elas:

- A classe ***ProcessarPedido()*** possui muitas responsabilidades inferidas a ela, por exemplo, ela: calcula o imposto sobre o tipo do produto; processa o pagamento dependendo do tipo escolhido; e ela notifica por email. - **(SRP)**
- Os métodos ***calcularTotal()*** e ***processarPagamento()*** estão implementados de tal maneira que, se for preciso adcionar outras opções (ex.: mais um tipo de produto ou outra forma de pagamento), haverá um esforço muito maior do que o necessário para implementa-las. Além disso, se for preciso modificar alguma opção, aumenta a chance de quebrar o código todo. - **(OCP)**

## Refatoração

A partir da análise realizada do código e do conhecimento sobre SOLID, a refatoração será feita seguindo as seguintes etapas:

- Separar cada responsabilidade em sua própria classe;
- Criar interface **CalcularImposto** e para cada item, implementar sua classe;
- Criar inteface **ProcessadorPagamento** e para cada forma de pagamento, implementar sua classe;
- Criar classe **PedidoService** para orquestrar o fluxo.

O código refatorado estará disponivel no [github](https://github.com/AlvaroDutra/SOLID-aula01).
