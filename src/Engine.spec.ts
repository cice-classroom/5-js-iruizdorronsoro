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

  it('should add "X" in the specific location', () => {
    const game = new Engine()

    game.Play('22')

    const actual = game.board

    expect(actual).toEqual([
      ['', '', ''],
      ['', 'X', ''],
      ['', '', ''],
    ])
  })

  it('should toggle "X" & "O"', () => {
    const game = new Engine()

    game.Play('22')
    game.Play('31')

    const actual = game.board

    expect(actual).toEqual([
      ['', '', ''],
      ['', 'X', ''],
      ['O', '', ''],
    ])
  })

  it('should reset the board', () => {
    const game = new Engine()

    game.Play('22')
    game.Play('31')
    game.resetBoard()

    const actual = game.board

    expect(actual).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
  })

  it('should get Player1 as winner', () => {
    const game = new Engine()

    game.Play('22')
    game.Play('31')
    game.Play('12')
    game.Play('11')
    game.Play('32')

    const actual = game.checkVictory('X')

    expect(actual).toBe(true)
  })

  it('should not get Player1 as winner', () => {
    const game = new Engine()

    game.Play('31')
    game.Play('22')
    game.Play('11')
    game.Play('12')
    game.Play('13')
    game.Play('32')

    const actual = game.checkVictory('X')

    expect(actual).toBe(false)
  })

  it('should not get Player2 as winner', () => {
    const game = new Engine()

    game.Play('22')
    game.Play('31')
    game.Play('12')
    game.Play('11')
    game.Play('32')

    const actual = game.checkVictory('O')

    expect(actual).toBe(false)
  })

  it('should get Player2 as winner', () => {
    const game = new Engine()

    game.Play('31')
    game.Play('22')
    game.Play('11')
    game.Play('12')
    game.Play('13')
    game.Play('32')

    const actual = game.checkVictory('O')

    expect(actual).toBe(true)
  })

  it('should get a draw', () => {
    const game = new Engine()

    game.Play('22')
    game.Play('31')
    game.Play('12')
    game.Play('11')
    game.Play('21')
    game.Play('23')
    game.Play('13')
    game.Play('32')
    game.Play('33')

    const actual = game.checkDraw()

    expect(actual).toBe(true)
  })
})
