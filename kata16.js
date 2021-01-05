const generateBoard = function(whiteQueen, blackQueen) {
  // Set up blank chessboard:
  const chessboard = [];
  for (let i = 0; i < 8; i++) {
    chessboard.push([0,0,0,0,0,0,0,0])
  };

  // Add queens to chessboard:
  const whiteQueenRow = whiteQueen[0];
  const whiteQueenCol = whiteQueen[1];
  const blackQueenRow = blackQueen[0];
  const blackQueenCol = blackQueen[1];

  chessboard[whiteQueenRow].splice(whiteQueenCol, 1, 1);
  chessboard[blackQueenRow].splice(blackQueenCol, 1, 1);

  return chessboard;
};


const queenThreat = function(chessboard) {
  // horizontalThreat:
  for (const row of chessboard) {
    sum = row.reduce(function(tally, current) {
      return tally + current;
    }, 0);
    if (sum === 2) {
      return true;
    };
  };

  // verticalThreat:
  const queenIndexArray = [];
  for (const row of chessboard) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 1) {
        if (queenIndexArray.includes(i)) {
          return true;
        } else {
          queenIndexArray.push(i);
        };
      };
    };
  };

  // diagonalThreat:
    // Get queen coordinates:
  const queensArray = [];
  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      if (chessboard[i][j] === 1) {
        queensArray.push([i, j]);
      }
    }
  }
  const firstQueenX = queensArray[0][0];
  const firstQueenY = queensArray[0][1];
  const secondQueenX = queensArray[1][0];
  const secondQueenY = queensArray[1][1];

      // Check for diagonal threat:
  if ((Math.abs(firstQueenX - secondQueenX)) === (Math.abs(firstQueenY - secondQueenY))) {
    return true;
  }

  // noThreat:
  return false;
};

// Driver code:
let whiteQueen = [2, 3];
let blackQueen = [1, 4];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));