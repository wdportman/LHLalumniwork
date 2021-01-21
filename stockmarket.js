// Brute force:

const maxProfit = function(inputArray) {
  
  let maxProfit = -Infinity;

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      const difference = inputArray[j] - inputArray[i];
      if (difference > maxProfit) {
        maxProfit = difference;
      };
    };
  };

  return maxProfit;

};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))


// More elegant:
