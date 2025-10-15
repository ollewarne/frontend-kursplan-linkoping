class BedomningSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="assessment">
        <h2>BEDÖMNING</h2>

        <article class="level">
          <div class="icon warning">⚠️</div>
          <h3>Inte Godkänd (IG)</h3>
          <p>Alla lärandemål är inte uppfyllda.</p>
        </article>

        <article class="level">
          <div class="icon success">✅</div>
          <h3>Godkänd (C)</h3>
          <p>Alla lärandemål är uppfyllda på en tillfredsställande nivå.</p>
        </article>

        <article class="level">
          <div class="icon gold">🏆</div>
          <h3>Väl Godkänd (VG)</h3>
          <p>
            Alla lärandemål är uppfyllda på en tillfredsställande nivå.<br />
            Utöver ovan uppvisar den studerande:
          </p>
          <ul>
            <li>Hög precision i utförande av effektiva DOM-manipulationer med JavaScript.</li>
            <li>Stor skicklighet vid skapande av interaktiva webbapplikationer med JavaScript och DOM-manipulation.</li>
            <li>Hög precision och korrekthet vid integrering av API:er för att visa och manipulera data i webbapplikationer.</li>
          </ul>
        </article>
      </section>
    `;
  }
}

customElements.define("bedomning-section", BedomningSection);
