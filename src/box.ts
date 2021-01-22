import { LitElement, html, property, customElement, css } from 'lit-element'
import { general } from './general'
import { Engine } from './Engine'
@customElement('board-box')
export class Box extends LitElement {
  @property({ type: Object })
  game!: Engine

  @property({ type: String })
  label!: string

  @property({ type: Boolean })
  reset!: boolean

  @property({ type: Boolean })
  disabled!: boolean

  static get styles() {
    return [
      general,
      css`
        .button {
          background-color: var(--background-color);
          color: var(--on-background-color);
          font-size: 300%;
          width: 100%;
          height: 100%;
        }
      `,
    ]
  }

  render() {
    if (this.reset) {
      this.resetParent()
    } else if (this.disabled) {
      return html` <button class="button" id="" }>${this.label}</button> `
    }
    return html` <button class="button" id="" @click="${this.onClick}" }>${this.label}</button> `
  }
  private resetParent() {
    this.label = ''
    this.disabled = false
    this.reset = false
    const customEventCheck = new CustomEvent('on-reset', {
      bubbles: true,
      composed: true,
    })
    this.dispatchEvent(customEventCheck)
  }

  private onClick() {
    if (this.label === undefined || this.label === '') {
      this.label = this.game.Play(this.id)
      const customEventCheck = new CustomEvent('on-new-box-click', {
        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(customEventCheck)
      const customEventReset = new CustomEvent('on-new-game-start', {
        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(customEventReset)
    }
  }
}
