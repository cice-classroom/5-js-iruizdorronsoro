import { LitElement, html, customElement, css, property } from 'lit-element'
@customElement('text-panel')
export class Panel extends LitElement {
  @property({ type: String })
  text!: string

  @property({ type: Boolean })
  reset!: boolean

  static get styles() {
    return css`
      .h2 {
        color: var(--background-color);
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    `
  }
  render() {
    if (this.reset) {
      this.text = ''
      this.reset = false
    }
    return html`<h2 class="h2">${this.text}</h2>`
  }
}
