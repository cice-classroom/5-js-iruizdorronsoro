import { LitElement, html, property, customElement, css } from 'lit-element'
import { Engine } from './Engine'
import { general } from './general'
@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  @property() game = new Engine()

  @property() reset = false

  @property() player1Score = 0

  @property() player2Score = 0

  static get styles() {
    return [
      general,
      css`
        .tic-tac-toe {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          color: var(--background-color);
        }
        .reset {
          background-color: var(--on-background-color);
          color: var(--background-color);
          border-radius: var(--s);
          padding: var(--s) var(--l);
          margin: var(--s);
          font-size: 100%;
          text-align: center;
        }
        .score {
          color: var(--background-color);
          margin: var(--s);
          text-align: center;
        }
      `,
    ]
  }

  render() {
    return html`
      <div class="tic-tac-toe">
        <button class="reset" @click="${() => this.resetGame()}">Reset</button>
        <div class="score">X : Player 1 | Score: ${this.player1Score}</div>
        <div class="score">O : Player 2 | Score: ${this.player2Score}</div>
        <tic-tac-toe-board
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-game-start="${this.undoReset}"
          @on-player1-win="${() => this.player1Score++}"
          @on-player2-win="${() => this.player2Score++}"
        ></tic-tac-toe-board>
      </div>
    `
  }
  private resetGame() {
    this.game.resetBoard()
    this.reset = true
  }

  private undoReset() {
    this.reset = false
  }
}
