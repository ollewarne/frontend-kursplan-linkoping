class Kunskaper extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- START: KUNSKAPER - "kunskaper" -->
        <section class="kunskaper">

            <img class="kunskaperLogo" src="images/chas-academy-logo.png" alt="ChasAcademy logo">
            <i class="ri-poker-hearts-line"></i>
            <div id="larandemal" class="kunskaperContainer">
                <h2>LÄRANDEMÅL</h2>
                <p>Vid avslutad kurs med godkända resultat, kan den studerande:</p>
            </div>
            <h3>KUNSKAPER</h3>

            <!-- START: CARDS KUNSKAPER - "kunskaperCards" -->
            <div class="kunskaperCards">

                <!-- PURPLE CARD -->
                <div id="purpleCard" class="cardPurple card">
                    <i class="ri-add-line"></i>
                    <p>Javascript & Interaktivitet</p>
                </div>

                <!-- GREEN CARD -->
                <div id="greenCard" class="cardGreen card">
                    <i class="ri-add-line"></i>
                    <p>Design & Tillgänglighet</p>
                </div>

                <!-- PINK CARD -->
                <div id="pinkCard" class="cardPink card">
                    <i class="ri-add-line"></i>
                    <p>Kvalitet, Säkerhet & AI</p>
                </div>

                <!-- ORANGE CARD -->
                <div id="orangeCard" class="cardOrange card">
                    <i class="ri-add-line"></i>
                    <p>Arbetssätt & Dokumentation</p>
                </div>
                 
            <!-- END: CARDS KUNSKAPER - "kunskaperCards" -->
            </div> 
        <!-- END: KUNSKAPER - "kunskaper" -->
        </section>
        `;
  }
}
customElements.define('kunskaper-cmp', Kunskaper);


// ---------- PURPLE CARD ----------

const cardPurple = document.getElementById('purpleCard')
let purpleOpen = false;

cardPurple.addEventListener('click', () => {
    if (!purpleOpen){
    cardPurple.classList.add('bigCardDisplay', 'bigCard');
    cardPurple.innerHTML = '<i class="ri-subtract-fill"></i><h5>Javascript & Interaktivitet</h5> <ul><li>Beskriva hur eventhantering används för att skapa interaktiva webbapplikationer</li><li>Förklara hur API:er används för att hämta och manipulera data</li><li>Utveckla modulära och återanvändbara komponenter i JavaScript</li></ul>';

    purpleOpen = true;

    } else if (purpleOpen) {
            cardPurple.innerHTML = '<i class="ri-add-line"></i><p>Javascript & Interaktivitet</p>';
            cardPurple.classList.remove('bigCardDisplay', 'bigCard');

            purpleOpen = false;
    };
});

// ---------- GREEN CARD ----------

const cardGreen = document.getElementById('greenCard')
let greenOpen = false;

cardGreen.addEventListener('click', () => {
    if (!greenOpen){
    cardGreen.classList.add('bigCardDisplay', 'bigCard');
    cardGreen.innerHTML = '<i class="ri-subtract-fill"></i><h5>Design & Tillgänglighet</h5><ul><li>Tillämpa WCAG-standarder för tillgängliga gränssnitt</li><li>Använda UX- och UI-principer för att skapa användarvänliga och estetiska lösningar</li></ul>';

    greenOpen = true;
    } else if (greenOpen) {
            cardGreen.innerHTML = '<i class="ri-add-line"></i><p>Design & Tillgänglighet</p>';
            cardGreen.classList.remove('bigCardDisplay', 'bigCard');

            greenOpen = false;
    };
});

// ---------- PINK CARD ----------

const cardPink = document.getElementById('pinkCard')
let pinkOpen = false;

cardPink.addEventListener('click', () => {
    if (!pinkOpen){
    cardPink.classList.add('bigCardDisplay', 'bigCard');
    cardPink.innerHTML = '<i class="ri-subtract-fill"></i><h5>Kvalitet, Säkerhet & AI</h5><ul><li>Förklara säkerhetsprinciper för att skydda användardata</li><li>Utföra testning av frontendapplikationer med verktyg som Jest och Cypress</li><li>Använda AI-verktyg för att analysera, optimera och förbättra kodkvalitet</li></ul>';

    pinkOpen = true;
    } else if (pinkOpen) {
            cardPink.innerHTML = '<i class="ri-add-line"></i><p>Kvalitet, Säkerhet & AI</p>';
            cardPink.classList.remove('bigCardDisplay', 'bigCard');

            pinkOpen = false;
    };
});

// ---------- ORANGE CARD ----------

const cardOrange = document.getElementById('orangeCard')
let orangeOpen = false;

cardOrange.addEventListener('click', () => {
    if (!orangeOpen){
    cardOrange.classList.add('bigCardDisplay', 'bigCard');
    cardOrange.innerHTML = '<i class="ri-subtract-fill"></i><h5>Arbetssätt & Dokumentation</h5><ul><li>Tillämpa agila metoder (Scrum, Kanban) för effektiv utvecklingsprocess</li><li>Skapa och underhålla strukturerad dokumentation för funktioner, komponenter och API-anrop</li></ul>';

    orangeOpen = true;
    } else if (orangeOpen) {
            cardOrange.innerHTML ='<i class="ri-add-line"></i><p>Arbetssätt & Dokumentation</p>';
            cardOrange.classList.remove('bigCardDisplay', 'bigCard');

            orangeOpen = false;
    };
});
