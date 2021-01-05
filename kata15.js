const makeNoSpaces = function(message) {
  let output = '';
  for (const character of message) {
    if (character !== ' ') {
      output += character;
    };
  };
  return output;
};

const convertToSquareCode = function(message) {

  const noSpacesMessage = makeNoSpaces(message);
  
  const sqrt = Math.ceil(Math.sqrt(noSpacesMessage.length));

  const messageArray = [];
  for (let i = 0; i < noSpacesMessage.length; i += sqrt) {
    messageArray.push(noSpacesMessage.substring(i, i + sqrt));
  };

  const outputArray = [];
  for (let i = 0; i < sqrt; i++) {
    let word = '';
    for (const row of messageArray) {
      if (row[i]) {
        word += row[i];
      };
    };
    outputArray.push(word);
  };

  const finalOutput = outputArray.join(' ');

  return finalOutput;

};

console.log(convertToSquareCode("chill out"));
console.log(convertToSquareCode("feed the dog"));
console.log(convertToSquareCode("have a nice day"));
console.log(convertToSquareCode("if man was meant to stay on the ground god would have given us roots"));