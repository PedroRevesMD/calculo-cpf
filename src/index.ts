import { CpfInvalido } from "./error/CpfInvalidoError";
import { CpfRepeticaoNumerica } from "./error/CpfRepeticaoNumericaError";
import { CpfTamanhoInvalido } from "./error/tamanhoInvalidoError";
import { checkCpfEqualDigits, trimSpecialCharacters, validateCpf, validCPFLength } from "./utils/utils";

(() => {
  let userCpf = Bun.argv[2];

  if(userCpf == null) {
    throw new Error("Você precisa inserir um CPF como parâmetro!")
  }

  userCpf = trimSpecialCharacters(userCpf);
  
  if(!validCPFLength(userCpf)) {
    throw new CpfTamanhoInvalido();
  }

  if(checkCpfEqualDigits(userCpf)) {
    throw new CpfRepeticaoNumerica();
  }

  if(!validateCpf(userCpf)) {
    throw new CpfInvalido();
  }

  console.log("O CPF Inserido é valido !!")

})()
