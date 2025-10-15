class Kunskaper extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <!-- START: KUNSKAPER - "kunskaper" -->
        <section class="kunskaper">

            <img class="kunskaperLogo" src="images/chas-academy-logo.png" alt="ChasAcademy logo">
            <i class="ri-poker-hearts-line"></i>
            <div class="kunskaperContainer">
                <h2>LÄRANDEMÅL</h2>
                <p>Vid avslutad kurs med godkända resultat, kan den studerande:</p>
            </div>
            <h3>KUNSKAPER</h3>

            <!-- START: CARDS KUNSKAPER - "kunskaperCards" -->
            <div class="kunskaperCards">
                <!-- PURPLE CARD - "cardPurple" "bigCardPurple" -->
                <div class="cardPurple card purple">
                    <p>Javascript & Interaktivitet</p>
                </div>
                <div class="bigCardPurple bigCard purple">
                    <h5>Javascript & Interaktivitet</h5>
                    <ul>
                        <li>Beskriva hur eventhantering används för att skapa interaktiva webbapplikationer</li>
                        <li>Förklara hur API:er används för att hämta och manipulera data</li>
                        <li>Utveckla modulära och återanvändbara komponenter i JavaScript</li>
                    </ul>
                </div>

                <!-- GREEN CARD - "cardGreen" "bigCardGreen" -->
                <div class="cardGreen card">
                    <p>Design & Tillgänglighet</p>
                </div>
                <div class="bigCardGreen">
                    <ul>
                        <li>Tillämpa WCAG-standarder för tillgängliga gränssnitt</li>
                        <li>Använda UX- och UI-principer för att skapa användarvänliga och estetiska lösningar</li>
                    </ul>
                </div>

                <!-- PINK CARD - "cardPink" "bigCardPink" -->
                <div class="cardPink card">
                    <p>Kvalitet, Säkerhet & AI</p>
                </div>
                <div class="bigCardPink">
                    <ul>
                        <li>Förklara säkerhetsprinciper för att skydda användardata</li>
                        <li>Utföra testning av frontendapplikationer med verktyg som Jest och Cypress</li>
                        <li>Använda AI-verktyg för att analysera, optimera och förbättra kodkvalitet</li>
                    </ul>
                </div>

                <!-- ORANGE CARD - "cardOrange" "bigCardOrange" -->
                <div class="cardOrange card">
                    <p>Arbetssätt & Dokumentation</p>
                </div>
                <div class="bigCardOrange">
                    <ul>
                        <li>Tillämpa agila metoder (Scrum, Kanban) för effektiv utvecklingsprocess</li>
                        <li>Skapa och underhålla strukturerad dokumentation för funktioner, komponenter och API-anrop</li>
                    </ul>
                </div>
                 
            <!-- END: CARDS KUNSKAPER - "kunskaperCards" -->
            </div> 
        <!-- END: KUNSKAPER - "kunskaper" -->
        </section>

        `;
  }
}
customElements.define('kunskaper-cmp', Kunskaper);