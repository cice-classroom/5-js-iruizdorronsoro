export class Engine {
  currentPlayer = 'X'

  public board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  public resetBoard() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
    this.currentPlayer = ''
  }
  public Play(id: string) {
    let player = this.currentPlayer
    const boardPosition: number[] = id.split('').map(x => +x)
    if (player === 'O') {
      this.currentPlayer = 'X'
    } else if (player === 'X') {
      this.currentPlayer = 'O'
    } else {
      player = 'X'
      this.currentPlayer = 'O'
    }
    this.board[boardPosition[0] - 1][boardPosition[1] - 1] = player
    return player
  }

  public checkVictory(playerName: string) {
    if (
      this.board[0][0] === playerName &&
      this.board[0][1] === playerName &&
      this.board[0][2] === playerName
    ) {
      return true
    }
    if (
      this.board[1][0] === playerName &&
      this.board[1][1] === playerName &&
      this.board[1][2] === playerName
    ) {
      return true
    }
    if (
      this.board[2][0] === playerName &&
      this.board[2][1] === playerName &&
      this.board[2][2] === playerName
    ) {
      return true
    }
    if (
      this.board[0][0] === playerName &&
      this.board[1][0] === playerName &&
      this.board[2][0] === playerName
    ) {
      return true
    }
    if (
      this.board[0][1] === playerName &&
      this.board[1][1] === playerName &&
      this.board[2][1] === playerName
    ) {
      return true
    }
    if (
      this.board[0][2] === playerName &&
      this.board[1][2] === playerName &&
      this.board[2][2] === playerName
    ) {
      return true
    }
    if (
      this.board[0][0] === playerName &&
      this.board[1][1] === playerName &&
      this.board[2][2] === playerName
    ) {
      return true
    }
    if (
      this.board[0][2] === playerName &&
      this.board[1][1] === playerName &&
      this.board[2][0] === playerName
    ) {
      return true
    }
    return false
  }
  public checkDraw() {
    if (
      this.board[0][0] !== '' &&
      this.board[0][1] !== '' &&
      this.board[0][2] !== '' &&
      this.board[1][0] !== '' &&
      this.board[1][1] !== '' &&
      this.board[1][2] !== '' &&
      this.board[2][0] !== '' &&
      this.board[2][1] !== '' &&
      this.board[2][2] !== ''
    ) {
      return true
    }
    return false
  }
}
