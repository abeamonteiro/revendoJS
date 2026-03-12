import { Conta } from "./Conta"

export class ContaPoupanca extends Conta {

constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    private aniversario: number
){
super(numero, agencia, tipo, titular, saldo)
}

public visualizar(): void {

super.visualizar()

console.log("Aniversário da Conta:", this.aniversario)

}

}