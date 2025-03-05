

class CpfTamanhoInvalido extends Error {
  constructor() {
    super("Erro: CPF com Tamanho Inválido!")
    this.name = "CpfTamanhoInvalido";
  }
}
