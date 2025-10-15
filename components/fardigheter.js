class Fardigheter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="section-fardigheter">
      <h3 class="title-fardigheter">FÄRDIGHETER</h3>
      <div class="wrapper-fardigheter">
          <div class="box-fardigheter yellow-fardigheter">UTVECKLING</div>
          <div class="box-fardigheter blue-fardigheter">DESIGN</div>
          <div class="box-fardigheter green-fardigheter">KVALITET</div>
          <div class="box-fardigheter red-fardigheter">ARBETSSÄTT</div>
      </div>
    </section>`;
  }
}
customElements.define('fardigheter-cmp', Fardigheter);
