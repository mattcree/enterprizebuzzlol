type Letter = string;
type FizzBuzzResult = "Fizz" | "Buzz" | "FizzBuzz" | undefined;
type FizzBuzzLookup = Map<Letter, FizzBuzzResult>;

export const toFizzBuzz = (position: number): FizzBuzzResult => {
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

export const fizzBuzz = (letter: string): FizzBuzzResult | Letter => {
  const fizbuzzResult = fizzBuzzLookup.get(letter);
  return fizbuzzResult ? fizbuzzResult : letter;
};
