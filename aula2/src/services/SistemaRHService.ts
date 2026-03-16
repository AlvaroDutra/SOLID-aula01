import { IBolsista } from "../interfaces/IBolsista";
import { IContratado } from "../interfaces/IContratado";
import { IDesenvolvedor } from "../interfaces/IDesenvolvedor";
import { IFuncionario } from "../interfaces/IFuncionario";
import { ILider } from "../interfaces/ILider";
import { IRegistraPonto } from "../interfaces/IRegistraPonto";
import { IRemunerado } from "../interfaces/IRemunerado";

export class SistemaRH {
    constructor(
        private fucnionarios: IFuncionario[],
        private registraPonto: IRegistraPonto[],
        private remunerados: IRemunerado[],
        private bolsistas: IBolsista[],
        private lideres: ILider[],
        private devs: IDesenvolvedor[],
        private contratados: IContratado[]
    ){}

    trabalhandoCom():void{
        this.fucnionarios.forEach(f => f.trabalhar());
    }

    registrarPontoTodos(): void{
        this.registraPonto.forEach(r => r.registrarPonto());
    }

    pagarSalarios():void{
        this.remunerados.forEach(r => r.receberSalario());
    }

    pagarBolsas():void{
        this.bolsistas.forEach(b => b.receberBolsa());
    }

    pagarPorProjeto(): void{
        this.contratados.forEach(c => c.receberPorProjeto());
    }

    conduzirReuniao():void{
        this.lideres.forEach(l => l.gerenciarEquipe());
    }

    iniciarSprint():void{
        this.devs.forEach(d => d.escreverCodigo());
    }
}