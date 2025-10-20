class Fardigheter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="section-fardigheter">
      <h3 class="title-fardigheter">FÄRDIGHETER</h3>
      <div class="wrapper-fardigheter">
          <div id="fardigheter-box1" class="box-fardigheter yellow-fardigheter">UTVECKLING<i class="ri-add-line"></i></div>
          <div id="fardigheter-big-box1" class="fardigheter-big-box utveckling-box yellow-fardigheter">
            <i class="ri-subtract-fill"></i>
            <ul class="list-fardigheter">
              <li>Utföra enklare DOM-manipulation med JavaScript.</li>
              <li>Skapa interaktiva webbapplikationer med JavaScript och DOM-manipulation.</li>
              <li>Integrera API:er för att visa och manipulera data i webbapplikationer.</li>
            </ul>
          </div>
          <div id="fardigheter-box2" class="box-fardigheter blue-fardigheter">DESIGN<i class="ri-add-line"></i></div>
          <div id="fardigheter-big-box2" class="fardigheter-big-box design-box blue-fardigheter">
            <i class="ri-subtract-fill"></i>
            <ul class="list-fardigheter">
              <li>Implementera tillgänglighetsanpassningar enligt WCAG-standarder.</li>
              <li>Designa och utveckla användarvänliga gränssnitt enlight UC/UI-principer.</li>
            </ul>
          </div>
          <div id="fardigheter-box3" class="box-fardigheter green-fardigheter">KVALITET<i class="ri-add-line"></i></div>
          <div id="fardigheter-big-box3" class="fardigheter-big-box kvalitet-box green-fardigheter">
            <i class="ri-subtract-fill"></i>
            <ul class="list-fardigheter">
              <li>Använda AI-baserade verktyg för att analysera och optimera JavaScript-kod.</li>
              <li>Skriva och genomföra automatiserade enhetstester för JavaScript-funktioner och UI-komponenter men hjälp av Jest.</li>
              <li>Dokumentera en frontendkodbas genom att skriva detaljerade JSDoc-kommentarer och instruktioner.</li>
            </ul>
          </div>
          <div id="fardigheter-box4" class="box-fardigheter red-fardigheter">ARBETSSÄTT<i class="ri-add-line"></i></div>
          <div id="fardigheter-big-box4" class="fardigheter-big-box arbetssatt-box red-fardigheter">
            <i class="ri-subtract-fill"></i>
            <ul class="list-fardigheter">
              <li>Använda en agil arbetsmetodik för att planera och genomföra frontenduppgifter.</li>
            </ul>
          </div>
      </div>
    </section>`;
  }
}
customElements.define('fardigheter-cmp', Fardigheter);

const box1 = document.getElementById("fardigheter-box1");
const bigBox1 = document.getElementById("fardigheter-big-box1");
box1.addEventListener('click', () => {
  bigBox1.classList.add("visible")
});

bigBox1.addEventListener('click', () => {
  bigBox1.classList.remove("visible");
});


const box2 = document.getElementById("fardigheter-box2");
const bigBox2 = document.getElementById("fardigheter-big-box2");
box2.addEventListener('click', () => {
  bigBox2.classList.add("visible")
});

bigBox2.addEventListener('click', () => {
  bigBox2.classList.remove("visible");
});


const box3 = document.getElementById("fardigheter-box3");
const bigBox3 = document.getElementById("fardigheter-big-box3");
box3.addEventListener('click', () => {
  bigBox3.classList.add("visible")
});

bigBox3.addEventListener('click', () => {
  bigBox3.classList.remove("visible");
});


const box4 = document.getElementById("fardigheter-box4");
const bigBox4 = document.getElementById("fardigheter-big-box4");
box4.addEventListener('click', () => {
  bigBox4.classList.add("visible")
});

bigBox4.addEventListener('click', () => {
  bigBox4.classList.remove("visible");
});
