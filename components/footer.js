
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  
      <footer>
        <div class="footer-content">
        
          <p class="footer-text">© 2025 Team Linköping. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
