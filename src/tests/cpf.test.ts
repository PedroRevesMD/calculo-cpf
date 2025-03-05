import { describe, it, expect } from "bun:test"
import { checkCpfEqualDigits, trimSpecialCharacters, validateCpf, validCPFLength } from "..";

describe("CPF tests", () => {
  it("should trim special characters", () => {
    const input = "543.678.123-25";
    const output = "54367812325";
    expect(trimSpecialCharacters(input)).toBe(output);
  })
  it("should not be able to enter a cpf with more than 11 characters", () => {
    const input = "543.678.123-25";
    expect(validCPFLength(input)).toBe(false)
  })
  it("should not be able to enter a cpf with all the digits being equal", () => {
    const input = "55555555555";
    const secondInput = "543.654.123-25";
    expect(checkCpfEqualDigits(input)).toBe(true);
    expect(checkCpfEqualDigits(secondInput)).toBe(false);
  })
  it("should be able to check if a cpf is valid based on the verification digit", () => {
    const firstValidCpf = "12345678909";
    const firstInvalidCpf = "12345678910";
    const secondValidCpf = "11144477735";
    const secondInvalidCpf = "123456789012";

    expect(validateCpf(firstValidCpf)).toBe(true);
    expect(validateCpf(secondValidCpf)).toBe(true);
    expect(validateCpf(firstInvalidCpf)).toBe(false);
    expect(validateCpf(secondInvalidCpf)).toBe(false);
  })
})
