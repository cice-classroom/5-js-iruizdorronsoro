import { Engine } from './Engine'

describe('Tic-Tac-Toe-Engine', () => {
  it('should start with an empty board', () => {
    const game = new Engine()

    const actual = game.board

    expect(actual).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
  })
})
