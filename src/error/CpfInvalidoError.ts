export class CpfInvalido extends Error {
  constructor() {
    super("Erro: CPF é Inválido !");
    this.name = "CpfInvalido";
  }
}
