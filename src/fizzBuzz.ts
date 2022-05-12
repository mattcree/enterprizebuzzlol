type Letter = string;
type FizzBuzz = "Fizz" | "Buzz" | "FizzBuzz";
type FizzBuzzLookup = Map<Letter, FizzBuzz | undefined>;

export const toFizzBuzz = (position: number): FizzBuzz | undefined => {
  if (position % 3 === 0 && position % 5 === 0) return "FizzBuzz";
  if (position % 3 === 0) return "Fizz";
  if (position % 5 === 0) return "Buzz";

  return undefined;
};

export const generateLetters = (): Array<Letter> => {
  return new Array(26)
    .fill(null)
    .map((_, index) => String.fromCharCode(index + 65));
};

export const letters = generateLetters();

export const createLookup = (): FizzBuzzLookup => {
  return letters.reduce((acc, letter, index) => {
    acc.set(letter, toFizzBuzz(index + 1));
    return acc;
  }, new Map());
};

const fizzBuzzLookup: FizzBuzzLookup = createLookup();

export const fizzBuzz = (letter: string): FizzBuzz | Letter => {
  const fizbuzzResult = fizzBuzzLookup.get(letter);
  return fizbuzzResult ? fizbuzzResult : letter;
};
