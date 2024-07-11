type PasswordSettings = {
  [type: string]: number | boolean;
  charLength: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
};

const UPPERCASE_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const LOWERCASE_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SPECIAL_CHARACTERS = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "`",
  "~",
];

export const GeneratePassword = (settings: PasswordSettings) => {
  const length = settings.charLength;
  let newPassword = "";

  const possibleCharacters = [];

  for (const key in settings) {
    if (key !== "charLength" && settings[key] === true) {
      possibleCharacters.push(key);
    }
  }

  while (newPassword.length < length) {
    const typeOfCharacter =
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];

    switch (typeOfCharacter) {
      case "uppercase":
        newPassword +=
          UPPERCASE_LETTERS[
            Math.floor(Math.random() * UPPERCASE_LETTERS.length)
          ];
        break;
      case "lowercase":
        newPassword +=
          LOWERCASE_LETTERS[
            Math.floor(Math.random() * LOWERCASE_LETTERS.length)
          ];
        break;
      case "numbers":
        newPassword += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        break;
      case "specialCharacters":
        newPassword +=
          SPECIAL_CHARACTERS[
            Math.floor(Math.random() * SPECIAL_CHARACTERS.length)
          ];
        break;

      default:
        newPassword += 0;
        break;
    }
  }

  return newPassword;
};
