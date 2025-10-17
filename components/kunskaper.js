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

                <!-- PURPLE CARD -->
                <div id="purpleCard" class="cardPurple card purple">
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