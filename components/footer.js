
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <img src="images/chas-academy-logo.png" alt="Chas Academy" class="logo-img">
          <p class="footer-text">© 2025 Chas Academy. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
