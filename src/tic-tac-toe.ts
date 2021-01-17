import { LitElement, html, property, customElement, css } from 'lit-element'
import { Engine } from './Engine'
import { general } from './general'
@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  @property() game = new Engine()

  @property() reset = false

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
          color: white;
          border-radius: var(--s);
          padding: var(--s) var(--m);
          font-size: 100%;
          text-align: center;
        }
      `,
    ]
  }

  render() {
    return html`
      <div class="tic-tac-toe">
        <button class="reset" @click="${() => this.resetGame()}">Reset</button>
        <tic-tac-toe-board
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-game-start="${this.undoReset}"
        ></tic-tac-toe-board>
      </div>
    `
  }
  private resetGame() {
    this.game.resetBoard()
    this.reset = true
    //location.reload();
  }

  private undoReset() {
    this.reset = false
  }
}
