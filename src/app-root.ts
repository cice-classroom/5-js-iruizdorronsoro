import { customElement, LitElement, html, css } from 'lit-element'

@customElement('app-root')
export class AppRoot extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
      }

      .wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-color: #2196f3;
        background: linear-gradient(315deg, #45beea 0%, #b3d9e7 100%);
        font-size: 24px;
      }

      .link {
        color: white;
      }
    `
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>Tic Tac Toe</h1>
        <tic-tac-toe></tic-tac-toe>
      </div>
    `
  }
}
