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
    this.board[boardPosition[0] - 1][boardPosition[1] - 1] = player
    if (player === 'O') {
      this.currentPlayer = 'X'
    } else if (player === 'X') {
      this.currentPlayer = 'O'
    } else {
      player = 'X'
      this.currentPlayer = 'O'
    }
    return player
  }

  public isAVictory() {
    return false
  }
}
