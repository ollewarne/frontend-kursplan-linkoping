class DesktopFardigheter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="destop-fardigheter">
      <p class="desktop-fardigheter-title">
        LÄRANDEMÅL <span class="orange-x">X</span> FÄRDIGHETER
      </p>
      <section class='fardigheter-section-wrapper'>
        <div class='fardigheter-grid'>
          <div class='big-div'>Dokumentera en frontendkodbas genom att skriva detaljerade JSDoc-kommentarer och instruktioner
              för hur man använder och testar JavaScript-funktioner och UI-komponenter.</div>
          <div>Skapa interaktiva webbapplikationer med JavaScript och DOM-manipulation.</div>
          <div>Utföra enklare DOM-manipulation med JavaScript.</div>
        </div>
        <div class='fardigheter-grid'>
          <div>Implementera tillgänglighets- anpassningar enligt WCAG-standarder.</div>
          <div>Designa och utveckla användarvänliga gränssnitt enligt UX/UI-principer.</div>
          <div class='big-div'>Använda AI-baserade verktyg för att analysera och optimera JavaScript-kod, inklusive identifiering av
              kodlukt och prestandaförbättringar.</div>
        </div>
        <div class='fardigheter-grid'>
          <div class='big-div'>Använda en agil arbetsmetodik för att planera och genomföra frontenduppgifter, inklusive att bryta ner
              stories, arbeta i sprintar och hantera uppgifter i ett Kanban-board.</div>
          <div>Skriva och genomföra automatiserade enhetstester för JavaScript-funktioner och UI-komponenter
              med hjälp av Jest.</div>
          <div>Integrera API:er för att visa och manipulera data i webbapplikationer.</div>
        </div>
      </section>
    </section>
    `;
  }
}
customElements.define('desktop-fardigheter', DesktopFardigheter);
