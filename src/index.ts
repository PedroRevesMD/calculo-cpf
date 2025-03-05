import { CpfInvalido } from "./error/CpfInvalidoError";
import { CpfRepeticaoNumerica } from "./error/CpfRepeticaoNumericaError";
import { CpfTamanhoInvalido } from "./error/tamanhoInvalidoError";
import { checkCpfEqualDigits, trimSpecialCharacters, validateCpf, validCPFLength } from "./utils/utils";

(() => {
  const userCpf = trimSpecialCharacters(Bun.argv[2]);
  
  if(!validCPFLength(userCpf)) {
    throw new CpfTamanhoInvalido();
  }

  if(!checkCpfEqualDigits(userCpf)) {
    throw new CpfRepeticaoNumerica();
  }

  if(!validateCpf(userCpf)) {
    throw new CpfInvalido();
  }

  console.log("O CPF Inserido é valido !!")

})()
