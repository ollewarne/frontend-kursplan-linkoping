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

const fardigheterWrapper = document.querySelector(".wrapper-fardigheter");
fardigheterWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains("wrapper-fardigheter")) return; // stop console errors from clicking the wrapper element
  if ([...event.target.classList].includes("box-fardigheter")) {
    event.target.nextElementSibling.classList.add("visible")
  } else if (event.target.tagName === 'I') {
    if (event.target.parentNode.classList.contains('fardigheter-big-box')) {
      event.target.parentNode.classList.remove('visible');
    }
    event.target.parentNode.nextElementSibling.classList.add("visible")
  } else {
    event.target.closest('.fardigheter-big-box').classList.remove('visible');
  }
});
