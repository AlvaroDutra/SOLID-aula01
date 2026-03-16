import { ICalcularImposto } from "./ICalcularImposto";

export class ImpostoLivro implements ICalcularImposto{
    calcular(valor: number): number {
        return valor * 0
    }
}