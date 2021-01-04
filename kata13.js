/*

INPUT: "this is a string"

OUTPUTS:
- camel:          thisIsAString
- pascal:         ThisIsAString
- snake:          this_is_a_string
- kebab:          this-is-a-string
- title:          This Is A String
- vowel:          thIs Is A strIng
- consonant:      THiS iS a STRiNG
- upper, snake:   THIS_IS_A_STRING

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
- camel, pascal, snake, kebab, title
- vowel, consonant
- upper, lower

*/

const makeCamel = function(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if ((string[i] !== ' ') && (string[i-1] !==' ')) {
      output += string[i].toLowerCase();
    };
    if ((string[i] !== ' ') && (string[i-1] ===' ')) {
      output += string[i].toUpperCase();
    };
  };
  return output;
};

const makePascal = function(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if ((string[i] !== ' ') && (string[i-1] !==' ') && (i !== 0)) {
      output += string[i].toLowerCase();
    };
    if ((string[i] !== ' ') && ((string[i-1] ===' ') || (i ===0))) {
      output += string[i].toUpperCase();
    };
  };
  return output;
};

const makeSnake = function(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output += '_'
    } else {
      output+= string[i];
    };
  };
  return output;
};

const makeKebab = function(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output += '-'
    } else {
      output+= string[i];
    };
  };
  return output;
};

const makeTitle = function(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if ((string[i-1] !==' ') && (i !== 0)) {
      output += string[i].toLowerCase();
    };
    if (((string[i-1] ===' ') || (i ===0))) {
      output += string[i].toUpperCase();
    };
  };
  return output;
};

const makeVowel = function(string) {
  let output = '';
  const vowels = 'aeiou';
  for (const character of string) {
    if (vowels.includes(character)) {
      output += character.toUpperCase();
    } else {
      output += character.toLowerCase();
    }
  }
  return output;
};

const makeConsonant = function(string) {
  let output = '';
  const vowels = 'aeiou';
  for (const character of string) {
    if (!vowels.includes(character)) {
      output += character.toUpperCase();
    } else {
      output += character.toLowerCase();
    }
  }
  return output;
};

const makeLowerCase = function(string) {
  let output = '';
  for (const character of string) {
    output += character.toLowerCase();
  };
  return output;
};

const makeUpperCase = function(string) {
  let output = '';
  for (const character of string) {
    output += character.toUpperCase();
  };
  return output;
};

const makeCaseHelper = function(string, typeOfCase) {
  let output = '';
  if (typeOfCase === 'camel') {
    output = makeCamel(string);
  };
  if (typeOfCase === 'pascal') {
    output = makePascal(string);
  };
  if (typeOfCase === 'snake') {
    output = makeSnake(string);
  };
  if (typeOfCase === 'kebab') {
    output = makeKebab(string);
  };
  if (typeOfCase === 'title') {
    output = makeTitle(string);
  };
  if (typeOfCase === 'vowel') {
    output = makeVowel(string);
  };
  if (typeOfCase === 'consonant') {
    output = makeConsonant(string);
  };
  if (typeOfCase === 'lower') {
    output = makeLowerCase(string);
  };
  if (typeOfCase === 'upper') {
    output = makeUpperCase(string);
  };
  return output;
};


const makeCase = function (string, typesOfCase) {

  let output = string;

  if (typeof typesOfCase === 'string') {
    output = makeCaseHelper(output, typesOfCase);
  } else {
    for (const typeOfCase of typesOfCase) {
      output = makeCaseHelper(output, typeOfCase);
    };
  };

  return output;

};

console.log(makeCase('THIS is a string', ['kebab', 'upper']));