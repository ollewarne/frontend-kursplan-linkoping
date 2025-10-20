class Divider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="divider-dots">
        <div class="divider-dot"></div>
        <div class="divider-dot"></div>
        <div class="divider-dot"></div>
    </div>
   `;
  }
}
customElements.define('divider-dots', Divider);
