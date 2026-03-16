import { IContratado } from "../interfaces/IContratado";
import { IDesenvolvedor } from "../interfaces/IDesenvolvedor";
import { IFuncionario } from "../interfaces/IFuncionario";

export class Freelancer implements IFuncionario, IDesenvolvedor, IContratado{
    trabalhar(): void {
        console.log("Trabalhando como Freelancer.");
    }
    escreverCodigo(): void {
        console.log("Escrevendo código.");
    }
    receberPorProjeto(): void {
        console.log("Recebendo por projeto.");
    }

}