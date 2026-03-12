export abstract class Conta {

constructor(
    public numero: number,
    public agencia: number,
    public tipo: number,
    public titular: string,
    protected saldo: number
){}

public sacar(valor: number): boolean {

    if (this.saldo < valor) {
        console.log("\nSaldo Insuficiente!")
        return false
    }

    this.saldo = this.saldo - valor
    return true
}

public depositar(valor: number): void {
    this.saldo = this.saldo + valor
}

public visualizar(): void {

console.log("\n\n*********************************************")
console.log("Dados da Conta:")
console.log("*********************************************")
console.log("Numero da Conta:", this.numero)
console.log("Agência:", this.agencia)
console.log("Tipo da Conta:", this.tipo)
console.log("Titular:", this.titular)
console.log("Saldo:", this.saldo)

}

}