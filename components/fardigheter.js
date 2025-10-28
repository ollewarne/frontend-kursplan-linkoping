class Fardigheter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="section-fardigheter">
      <h3 class="title-fardigheter">FÄRDIGHETER</h3>
      <div class="wrapper-fardigheter">
          <div id="fardigheter-box1" class="box-fardigheter red-fardigheter">UTVECKLING<i class="ri-add-line"></i></div>
          <div id="fardigheter-big-box1" class="fardigheter-big-box utveckling-box red-fardigheter">
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
          <div id="fardigheter-box4" class="box-fardigheter purple-fardigheter">ARBETSSÄTT<i class="ri-add-line"></i></div>
          <div id="fardigheter-big-box4" class="fardigheter-big-box arbetssatt-box purple-fardigheter">
            <i class="ri-subtract-fill"></i>
            <ul class="list-fardigheter">
              <li>Använda en agil arbetsmetodik för att planera och genomföra frontenduppgifter.</li>
            </ul>
          </div>
      </div>
    </section>
    <section class="desktop-fardigheter">
    <div class="kunskaper-container fardigheter-container">
        <h2 class="desktop-h2">LÄRANDEMÅL<span class="x">x</span><span class="kunskap">FÄRDIGHETER</span></h2>
        <p>Vid avslutad kurs med godkända <span>resultat, kan den studerande:</span></p>
    </div>
      <section class='fardigheter-section-wrapper'>
        <div class='fardigheter-grid'>
          <div class='big-div pink-fardigheter'>Dokumentera en frontendkodbas genom att skriva detaljerade JSDoc-kommentarer och instruktioner
              för hur man använder och testar JavaScript-funktioner och UI-komponenter.</div>
          <div class="red-fardigheter">Skapa interaktiva webbapplikationer med JavaScript och DOM-manipulation.</div>
          <div class="blue-fardigheter">Utföra enklare DOM-manipulation med JavaScript.</div>
        </div>
        <div class='fardigheter-grid'>
          <div class="green-fardigheter">Implementera tillgänglighets- anpassningar enligt WCAG-standarder.</div>
          <div class="purple-fardigheter">Designa och utveckla användarvänliga gränssnitt enligt UX/UI-principer.</div>
          <div class='big-div orange-fardigheter'>Använda AI-baserade verktyg för att analysera och optimera JavaScript-kod, inklusive identifiering av
              kodlukt och prestandaförbättringar.</div>
        </div>
        <div class='fardigheter-grid'>
          <div class='big-div yellow-fardigheter'>Använda en agil arbetsmetodik för att planera och genomföra frontenduppgifter, inklusive att bryta ner
              stories, arbeta i sprintar och hantera uppgifter i ett Kanban-board.</div>
          <div class="pink-fardigheter">Skriva och genomföra automatiserade enhetstester för JavaScript-funktioner och UI-komponenter
              med hjälp av Jest.</div>
          <div class="blue-fardigheter">Integrera API:er för att visa och manipulera data i webbapplikationer.</div>
        </div>
      </section>
    </section>`;
  }
}
customElements.define('fardigheter-cmp', Fardigheter);

function handleEvent(event) {
  if (document.body.clientWidth > 600) return;
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
}

const fardigheterWrapper = document.querySelector(".wrapper-fardigheter");
fardigheterWrapper.addEventListener('click', handleEvent);
