import { fizzBuzz } from "./fizzBuzz";

describe("FizzBuzz", () => {
  it("should return Fizz when letter position is divisible by 3", () => {
    expect(fizzBuzz("C")).toEqual("Fizz");
  });

  it("should return Buzz when letter position is divisible by 5", () => {
    expect(fizzBuzz("E")).toEqual("Buzz");
  });

  it("should return FizzBuzz when when letter position is divisible by both 3 and 5", () => {
    expect(fizzBuzz("O")).toEqual("FizzBuzz");
  });

  it("should return the letter position is not divisible by either 3 or 5", () => {
    expect(fizzBuzz("A")).toEqual("A");
  });

  [
    ["A", "A"],
    ["B", "B"],
    ["C", "Fizz"],
    ["D", "D"],
    ["E", "Buzz"],
    ["F", "Fizz"],
    ["G", "G"],
    ["H", "H"],
    ["I", "Fizz"],
    ["J", "Buzz"],
    ["K", "K"],
    ["L", "Fizz"],
    ["M", "M"],
    ["N", "N"],
    ["O", "FizzBuzz"],
    ["P", "P"],
    ["Q", "Q"],
    ["R", "Fizz"],
    ["S", "S"],
    ["T", "Buzz"],
    ["U", "Fizz"],
    ["V", "V"],
    ["W", "W"],
    ["X", "Fizz"],
    ["Y", "Buzz"],
    ["Z", "Z"]
  ].forEach(([letter, expectedOutput]) => {
    it(`should return ${expectedOutput} when letter is ${letter}`, () => {
      expect(fizzBuzz(letter)).toEqual(expectedOutput);
    });
  });
});
