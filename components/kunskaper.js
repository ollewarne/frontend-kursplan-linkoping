// SCRIPT: COMPONENT

class Kunskaper extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="kunskaper">

    <img class="kunskaper-logo" src="images/chas-academy-logo.png" alt="Chas Academy Logo">
    <i class="ri-poker-hearts-line"></i>

    <div id="larandemal" class="kunskaper-container">
        <h2>LÄRANDEMÅL</h2>
        <p>Vid avslutad kurs med godkända <span>resultat, kan den studerande:</span></p>
    </div>

    <!-- START: kunskaper-cards -->
    <div class="kunskaper-cards">

        <h3>KUNSKAPER</h3>

        <!-- START: cards-grid -->
        <div class="cards-grid"> 

            <!------- PURPLE CARD------->
            <!------- display ------->
            <div id="purple-card" class="card small-card color-purple">
                <i class="ri-add-line"></i>
                <h4>JAVASCRIPT & INTERAKTIVITET</h4>
            </div>

            <div class="test-pos"></div>
            <!------- open display ------->
            <div id="purple-open" class="purple-test card big-card color-purple card-hide">
                <i class="ri-subtract-fill"></i>
                <h4>JAVASCRIPT & INTERAKTIVITET</h4>
                <ul>
                    <li>Beskriva hur eventhantering används för att skapa interaktiva webbapplikationer</li>
                    <li>Förklara hur API:er används för att hämta och manipulera data</li>
                    <li>Utveckla modulära och återanvändbara komponenter i JavaScript</li>
                </ul>
            </div>

            <!------- GREEN CARD ------->
            <!------- display ------->
            <div id="green-card" class="card small-card color-green">
                <i class="ri-add-line"></i>
                <h4>DESIGN & TILLGÄNGLIGHET</h4>
            </div>

            <!------- open display ------->
            <div id="green-open" class="card big-card color-green card-hide">
                <i class="ri-subtract-fill"></i>
                <h4>DESIGN & TILLGÄNGLIGHET</h4>
                <ul>
                    <li>Tillämpa WCAG-standarder för tillgängliga gränssnitt</li>
                    <li>Använda UX- och UI-principer för att skapa användarvänliga och estetiska lösningar</li>
                </ul>
            </div>

            <!------- PINK CARD ------->
            <!------- display ------->
            <div id="pink-card" class="card small-card color-pink">
                <i class="ri-add-line"></i>
                <h4>KVALITET, SÄKERHET & AI</h4>
            </div>

            <!------- open display ------->
            <div id="pink-open" class="card big-card color-pink card-hide">
                <i class="ri-subtract-fill"></i>
                <h4>KVALITET, SÄKERHET & AI</h4>
                <ul>
                    <li>Förklara säkerhetsprinciper för att skydda användardata</li>
                    <li>Utföra testning av frontendapplikationer med verktyg som Jest och Cypress</li>
                    <li>Använda AI-verktyg för att analysera, optimera och förbättra kodkvalitet</li>
                </ul>
            </div>

            <!------- ORANGE CARD ------->
            <!------- display ------->
            <div id="orange-card" class="card small-card color-orange">
                <i class="ri-add-line"></i>
                <h4>ARBETSSÄTT & DOKUMENTATION</h4>
            </div>

            <!------- open display ------->
            <div id="orange-open" class="card big-card color-orange card-hide">
                <i class="ri-subtract-fill"></i>
                <h4>ARBETSSÄTT & DOKUMENTATION</h4>
                <ul>
                    <li>Tillämpa agila metoder (Scrum, Kanban) för effektiv utvecklingsprocess</li>
                    <li>Skapa och underhålla strukturerad dokumentation för funktioner, komponenter och API-anrop</li>
                </ul>
            </div>
        </div> <!-- END: cards-grid -->
    </div> <!-- END: kunskaper-cards -->
    </section> <!-- END: kunskaper -->
    `;
  }
}
customElements.define('kunskaper-cmp', Kunskaper);

// SCRIPT: OPENING CARDS
// purple card
const purpleCard = document.getElementById('purple-card')
const purpleOpen = document.getElementById('purple-open')

purpleCard.addEventListener('click', () => {
  purpleOpen.classList.add('card-show');
});

purpleOpen.addEventListener('click', () => {
  purpleOpen.classList.remove('card-show');
});

// green card 
const greenCard = document.getElementById('green-card')
const greenOpen = document.getElementById('green-open')

greenCard.addEventListener('click', () => {
  greenOpen.classList.add('card-show');
});

greenOpen.addEventListener('click', () => {
  greenOpen.classList.remove('card-show');
});

// pink card
const pinkCard = document.getElementById('pink-card')
const pinkOpen = document.getElementById('pink-open')

pinkCard.addEventListener('click', () => {
  pinkOpen.classList.add('card-show');
});

pinkOpen.addEventListener('click', () => {
  pinkOpen.classList.remove('card-show');
});

// orange card 
const orangeCard = document.getElementById('orange-card')
const orangeOpen = document.getElementById('orange-open')

orangeCard.addEventListener('click', () => {
  orangeOpen.classList.add('card-show');
});

orangeOpen.addEventListener('click', () => {
  orangeOpen.classList.remove('card-show');
});