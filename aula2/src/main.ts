import { Desenvolvedor } from "./models/Desenvolvedor";
import { Estagiario } from "./models/Estagiario";
import { Freelancer } from "./models/Freelancer";
import { Gerente } from "./models/Gerente";
import { SistemaRH } from "./services/SistemaRHService";

const gerente = new Gerente();
const dev = new Desenvolvedor();
const estagiario = new Estagiario();
const freelancer = new Freelancer();

const rh = new SistemaRH(
    [gerente, dev, estagiario, freelancer],
    [gerente, dev, estagiario],
    [gerente, dev],             
    [estagiario],                 
    [gerente],                    
    [dev, estagiario, freelancer],
    [freelancer]             
);

rh.trabalhandoCom();
rh.registrarPontoTodos();
rh.pagarSalarios();
rh.pagarBolsas();
rh.conduzirReuniao();
rh.iniciarSprint();
rh.pagarPorProjeto();