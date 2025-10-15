class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="parent">
        <div class="divNav"></div>
        <div class="divLogo">
          <img src="images/chas-academy-logo.png" alt="Chas Academy" class="logo-img">
        </div>
        <div class="divHambureger">
          <i class="ri-menu-line" aria-hidden="true"></i>
        </div>
      </nav>
    `;
  }
}
customElements.define('nav-bar', NavBar);
