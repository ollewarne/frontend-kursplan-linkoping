class DesktopFardigheter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="destop-fardigheter">
      <p class="desktop-fardigheter-title">
        LÄRANDEMÅL <span class="orange-x">X</span> FÄRDIGHETER
      </p>
      <section class='fardigheter-section-wrapper'>
        <div class='fardigheter-grid'>
          <div class='big-div'>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
          <div>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
          <div>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
        </div>
        <div class='fardigheter-grid'>
          <div>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
          <div>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
          <div class='big-div'>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
        </div>
        <div class='fardigheter-grid'>
          <div class='big-div'>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
          <div>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
          <div>hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hello</div>
        </div>
      </section>
    </section>
    `;
  }
}
customElements.define('desktop-fardigheter', DesktopFardigheter);
