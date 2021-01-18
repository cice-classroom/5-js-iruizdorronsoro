import { LitElement, html, property, customElement, css } from 'lit-element'
import { Engine } from './Engine'
import { general } from './general'
@customElement('tic-tac-toe-board')
export class Board extends LitElement {
  @property({ type: Object })
  game!: Engine

  @property({ type: String })
  text!: string

  @property({ type: Boolean })
  reset!: boolean

  @property() disabled = false

  static get styles() {
    return [
      general,
      css`
        .board-wrapper {
          display: grid;
          grid-template-columns: repeat(3, var(--xsl));
          grid-template-rows: repeat(3, var(--xsl));
          margin-top: var(--l);
        }
      `,
    ]
  }

  render() {
    return html`
      <div class="board-wrapper">
        <board-box
          id="11"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="12"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="13"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="21"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="22"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="23"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="31"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="32"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
          }}"
        ></board-box>
        <board-box
          id="33"
          .game="${this.game}"
          .reset="${this.reset}"
          .disabled="${this.disabled}"
          @on-new-box-click="${this.checkVictory}"
          @on-reset="${() => {
            this.disabled = false
            this.reset = false
            this.text = ''
          }}"
        ></board-box>
      </div>
      <text-panel .text="${this.text}" .reset="${this.reset}"></text-panel>
    `
  }

  private checkVictory() {
    if (this.game.checkVictory('X')) {
      this.text = 'You win Player 1'
      this.disabled = true
      const customEventPlayer1 = new CustomEvent('on-player1-win', {
        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(customEventPlayer1)
    } else if (this.game.checkVictory('O')) {
      this.text = 'You win Player 2'
      this.disabled = true
      const customEventPlayer2 = new CustomEvent('on-player2-win', {
        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(customEventPlayer2)
    } else if (this.game.checkDraw()) {
      this.text = "It's a draw"
    }
  }
}
