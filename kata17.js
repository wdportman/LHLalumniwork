const blocksAway = function(directions) {
  const output = {
    east: 0,
    north: 0
  };

  let current;

  for (const direction of directions) {
    // Right:
    if (direction === 'right') {
      switch (current) {
        case undefined:
          current = 'east';
          break;
        case 'east':
          current = 'south';
          break;
        case 'west':
          current = 'north';
          break;
        case 'south':
          current = 'west';
          break;
        case 'north':
          current = 'east';
      };
    // Left:
    } else if (direction === 'left') {
      switch (current) {
        case undefined:
          current = 'north';
          break;
        case 'east':
          current = 'north';
          break;
        case 'west':
          current = 'south';
          break;
        case 'south':
          current = 'east';
          break;
        case 'north':
          current = 'west';
      };
    // Number:
    } else {
      switch (current) {
        case 'north':
          output.north += direction;
          break;
        case 'south':
          output.north -= direction;
          break;
        case 'east':
          output.east += direction;
          break;
        case 'west':
          output.east -= direction;
      };
    };
  };

  return output;
};

// Driver code:
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// Expected output:
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}