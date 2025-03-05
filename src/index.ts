export function trimSpecialCharacters(text: string): string {
  return text.replace(/\D/g, '');
}

export function validCPFLength(text: string): boolean {
  const cpfLength = text.length;

  if(cpfLength != 11) {
    return false;
  } 

  return true;
}

class CpfTamanhoInvalido extends Error {
  constructor() {
    super("Erro: CPF com Tamanho Inválido!")
    this.name = "CpfTamanhoInvalido";
  }
}

export function checkCpfEqualDigits(text: string): boolean {
  const regex = /^(\d)\1{10}/;
  if (regex.test(text)) {
    return true;
  } 

  return false;
}

class CpfRepeticaoNumerica extends Error {
  constructor() {
    super("Erro: CPF não é valido pois contém repetição númerica !");
    this.name = "CpfRepeticaoNumerica";
  }
}

export function validateCpf(text: string): boolean {
  let sum = 0;

  for(let i = 0; i < 9; i++) {
    sum += parseInt(text[i]) * (10 - i)
  }
  let firstCheckDigit = (sum * 10) % 11;
  firstCheckDigit = firstCheckDigit === 10 ? 0 : firstCheckDigit;

  if(firstCheckDigit !== parseInt(text[9])) {
    return false;
  }

  sum = 0;
  for(let i = 0; i < 10; i++) {
    sum += parseInt(text[i]) * (11 - i)
  }
  let secondCheckDigit = (sum * 10) % 11;
  secondCheckDigit = secondCheckDigit === 10 ? 0 : secondCheckDigit;

  if(secondCheckDigit !== parseInt(text[10])) {
    return false;
  }
  
  return true;
}

class CpfInvalido extends Error {
  constructor() {
    super("Erro: CPF é Inválido !");
    this.name = "CpfInvalido";
  }
}
