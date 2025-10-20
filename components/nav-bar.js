class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="parent-Nav">
        <div class="divNav"></div>
        <div class="divLogo">
          <img src="images/chas-academy-logo.png" alt="Chas Academy" class="logo-img">
        </div>
        <div class="divHambureger" role="button" aria-expanded="false">
          <i class="ri-menu-line" aria-hidden="true"></i>
        </div>
      </nav>

      <div class="menu-links">
        <a href="#intro">INTRO</a>
        <a href="#larandemal">LÄRANDEMÅL</a>
        <a href="#kunskap">KUNSKAPSKONTROLL</a>
        <a href="#bedomning">BEDÖMNING</a>
        <a href="#sarskilt-stod">SÄRSKILT STÖD</a>
      </div>
    `;

    const host = this;
    const btn  = host.querySelector('.divHambureger');
    const icon = btn.querySelector('i');

    function setOpen(isOpen){
      host.classList.toggle('is-open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      icon.classList.toggle('ri-menu-line', !isOpen);
      icon.classList.toggle('ri-close-line', isOpen);
    }

    btn.addEventListener('click', () => {
      setOpen(!host.classList.contains('is-open'));
    });
    
    host.querySelector('.menu-links').addEventListener('click', e => {
      if (e.target.tagName === 'A') setOpen(false);
    });
  }
}
customElements.define('nav-bar', NavBar);
