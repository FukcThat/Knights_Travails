// import the boardsize later from board
const boardSize = 8;

class Knight {
  constructor() {
    this.start = [null, null];
    this.end = [null, null];
    this.path = [];
    this.queue = [];
    this.visited = [];
  }

  knightMoves = () => {
    // Define all possible knight moves from a [0, 0] position
    const stepX = [2, 2, -2, -2, 1, 1, -1, -1];
    const stepY = [1, -1, 1, -1, 2, -2, 2, -2];

    // while the queue isn't empty, remove the first position of the queue and assign it to the currentPosition
    while (this.queue.length > 0) {
      const currentPosition = this.queue.shift();

      // Check if the current Position of x[0] & y[1] are the destination positions x & y
      if (
        currentPosition[0] === this.end[0] &&
        currentPosition[1] === this.end[1]
      ) {
        // Log recreated path passing in the current Position
        console.log(this.recreatePath(currentPosition));
      }

      // Go through all possible knight moves
      for (let i = 0; i < stepX.length; i++) {
        // Calculate the next potential position from the current position
        const nextX = currentPosition[0] + stepX[i];
        const nextY = currentPosition[1] + stepY[i];

        if (this.isValidMove(nextX, nextY)) {
          this.queue.push([nextX, nextY]);
          this.visited[nextX][nextY] = current;
        }
      }
    }

    return [];
  };

  // Reset path, queue and visited
  resetBFS = () => {
    this.path = [];
    this.queue = [];
    this.queue.push(this.start);
    this.clearVisited();
    this.visited[this.start[0]][this.start[1]] = true;
  };

  // Clear Visited
  clearVisited = () => {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        this.visited[i][j] = false;
      }
    }
  };

  // Reconstruct path
  recreatePath = (currentPosition) => {
    // Set path variable to array containing the current position
    const path = [currentPosition];

    // While currentPosition of x & y are not equal to the start x & start y
    while (
      currentPosition[0] !== this.start[0] ||
      currentPosition[1] !== this.start[1]
    ) {
      // Set current Position to the previous position to backtrack and push to path
      currentPosition = this.visited[currentPosition[0]][currentPosition[1]];
      path.push(currentPosition);
    }
    // Return the path in reverse to have it start to end
    return path.reverse();
  };
}

// Check if the next move is illeagal or not
isMoveValid = (x, y) => {
  return (
    // If x and y are larger than 0 and smaller than the boardsize AND not in visited, we good
    x >= 0 && x < boardSize && y >= 0 && y < boardSize && !this.visited[x][y]
  );
};
