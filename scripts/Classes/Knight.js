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

      if (
        currentPosition[0] === this.end[0] &&
        currentPosition[1] === this.end[1]
      ) {
        // reconstruct path
      }
    }
  };
}
