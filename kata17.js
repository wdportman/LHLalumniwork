const blocksAway = function(directions) {
  const output = {
    east: 0,
    north: 0
  };

  let current;

  //refactor to use switch statement

  for (const direction of directions) {
    // Right:
    if (direction === 'right') {
      if (!current) {
        current = 'east';
      } else if (current === 'east') {
        current = 'south';
      } else if (current === 'west') {
        current = 'north';
      } else if (current === 'south') {
        current = 'west';
      } else if (current === 'north') {
        current = 'east';
      };
    // Left:
    } else if (direction === 'left') {
      if (!current) {
        current = 'north';
      } else if (current === 'east') {
        current = 'north';
      } else if (current === 'west') {
        current = 'south';
      } else if (current === 'south') {
        current = 'east';
      } else if (current === 'north') {
        current = 'west';
      };
    // Number:
    } else {
      if (current === 'north') {
        output.north += direction;
      };
      if (current === 'south') {
        output.north -= direction;
      };
      if (current === 'east') {
        output.east += direction;
      };
      if (current === 'west') {
        output.east -= direction;
      };
    };
    // console.log('current:', current, '\n output:', output);
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