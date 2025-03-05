class CpfRepeticaoNumerica extends Error {
  constructor() {
    super("Erro: CPF não é valido pois contém repetição númerica !");
    this.name = "CpfRepeticaoNumerica";
  }
}
