
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="parent">
        <div class="divFooter"></div>
        <div class="">
          <img src="images/chas-academy-logo.png" alt="Chas Academy" class="logo-img">
        </div>
        <div class="divFooter">
          <i class="" aria-hidden="true"></i>
        </div>
      </nav>
    `;
  }
}
customElements.define('footer', Footer);