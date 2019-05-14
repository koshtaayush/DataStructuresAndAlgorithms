//The program consists of 5 functions:
/* 
    1. getPossibleMoves - to know where the knight can move
    2. isMoveAllowed - to know whether the move is allowed or not
    3. isBoardCompletelyVisited - to check whether the knight has travelled to all the squares or not
    4. knightTourRecursive  - recursive function to be called
    5. knightTour - knights tour initialization function 
*/

/**
 * @param {number[][]} chessboard
 * @param {number[]} position
 * @return {number[][]}
 */

 /* 
    first generate all the possible moves
    and then filter out according to the board size
 */

function getPossibleMoves(chessboard, position) {
    // Generate all knight moves (even those that go beyond the board).
    const possibleMoves = [
      [position[0] - 1, position[1] - 2],
      [position[0] - 2, position[1] - 1],
      [position[0] + 1, position[1] - 2],
      [position[0] + 2, position[1] - 1],
      [position[0] - 2, position[1] + 1],
      [position[0] - 1, position[1] + 2],
      [position[0] + 1, position[1] + 2],
      [position[0] + 2, position[1] + 1],
    ];
  
    // Filter out all moves that go beyond the board.
    return possibleMoves.filter((move) => {
      const boardSize = chessboard.length;
      return move[0] >= 0 && move[1] >= 0 && move[0] < boardSize && move[1] < boardSize;
    });
  }
  
  /**
   * @param {number[][]} chessboard
   * @param {number[]} move
   * @return {boolean}
   */

   /* 
    if the position in the chessboard has already been not visited then return true
   */
  function isMoveAllowed(chessboard, move) {
    return chessboard[move[0]][move[1]] !== 1;
  }
  
  /**
   * @param {number[][]} chessboard
   * @param {number[][]} moves
   * @return {boolean}
   */

   /* 
    to compare the number of counts required for the board size
    whether it has reached or not
   */
  function isBoardCompletelyVisited(chessboard, moves) {
    const totalPossibleMovesCount = chessboard.length ** 2;
    const existingMovesCount = moves.length;
  
    return totalPossibleMovesCount === existingMovesCount;
  }
  
  /**
   * @param {number[][]} chessboard
   * @param {number[][]} moves
   * @return {boolean}
   */
    /* 
        recursive function for knights tour problem
        first clone the chess board
        check if the board has already been completely visited
        if not 
            then take the last move from moves array
            get the possible moves from that point
            move through all the possible moves from the possibleMoves array by a for loop
                check if move is allowed or not
                    if it is 
                        then push it in moves array 
                        mark that square as visited
                        If further moves starting from current are successful then
                        return true which means the solution is found.
                        If current move was unsuccessful then backtrack and pop the move from moves array and 
                        mark it as unvisited
    */

  function knightTourRecursive(chessboard, moves) {
    const currentChessboard = chessboard;
  
    // If board has been completely visited then we've found a solution.
    if (isBoardCompletelyVisited(currentChessboard, moves)) {
      return true;
    }
  
    // Get next possible knight moves.
    const lastMove = moves[moves.length - 1];
    const possibleMoves = getPossibleMoves(currentChessboard, lastMove);
  
    // Try to do next possible moves.
    for (let moveIndex = 0; moveIndex < possibleMoves.length; moveIndex += 1) {
      const currentMove = possibleMoves[moveIndex];
  
      // Check if current move is allowed. We aren't allowed to go to
      // the same cells twice.
      if (isMoveAllowed(currentChessboard, currentMove)) {
        // Actually do the move.
        moves.push(currentMove);
        currentChessboard[currentMove[0]][currentMove[1]] = 1;
  
        // If further moves starting from current are successful then
        // return true meaning the solution is found.
        if (knightTourRecursive(currentChessboard, moves)) {
          return true;
        }
  
        // BACKTRACKING.
        // If current move was unsuccessful then step back and try to do another move.
        moves.pop();
        currentChessboard[currentMove[0]][currentMove[1]] = 0;
      }
    }
  
    // Return false if we haven't found solution.
    return false;
  }
  
  /**
   * @param {number} chessboardSize
   * @return {number[][]}
   */

   /* 
        initialize the chessboard
        initialize the moves array
        initialize the first move
        mark the first move as visited
        recursively call the recusrsive function 
   */
  function knightTour(chessboardSize) {
    // Init chessboard.
    const chessboard = Array(chessboardSize).fill(null).map(() => Array(chessboardSize).fill(0));
  
    // Init moves array.
    const moves = [];
  
    // Do first move and place the knight to the 0x0 cell.
    const firstMove = [0, 0];
    moves.push(firstMove);
    chessboard[firstMove[0]][firstMove[0]] = 1;
  
    // Recursively try to do the next move.
    const solutionWasFound = knightTourRecursive(chessboard, moves);
  
    return solutionWasFound ? moves : [];
  }

  console.log(knightTour(8));
