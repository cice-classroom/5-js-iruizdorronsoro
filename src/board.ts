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

  public checkVictory() {
    if (this.game.isAVictory()) {
      this.text = 'You win'
    }
  }

  render() {
    return html`
      <div class="board-wrapper">
        <board-box
          id="11"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="12"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="13"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="21"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="22"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="23"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="31"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="32"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
        <board-box
          id="33"
          .game="${this.game}"
          .reset="${this.reset}"
          @on-new-box-click="${this.checkVictory}"
        ></board-box>
      </div>
      <text-panel>${this.text}</text-panel>
    `
  }
}
