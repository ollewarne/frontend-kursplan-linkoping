class Summative extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <section class="summativ">
            <h1 id="kunskap">KUNSKAPSKONTROLL</h1>
            <h2 class="underline">SUMMATIV BEDÖMNING</h2>
            <p>Summativ bedömning utvärderar studerandes kunskaper och färdigheter retroaktivt för att sammanfatta vad
             den studerande kan vid examinationstillfället. Den summativa bedömningen täcker samtliga kursmål och sker vid
            följande avgränsade examinationstillfällen:</p>
            <div class="grid-summativ">
                <div class="summativ-layout" id="summativ01">
                    <h3>Skriftligt kunskapstest</h3>
                    <p>En individuell prövning av teoretiska kunskaper.</p>    
                </div>
                <div class="summativ-layout" id="summativ02">
                    <h3>Skriftlig reflektion</h3>
                    <p>En individuell redogörelse för egna lösningar och tillvägagångssätt.</p>    
                </div>
                <div class="summativ-layout" id="summativ03">
                    <h3>Projektinlämning</h3>
                    <p>En gruppinlämning där varje studerandes individuella insats bedöms.</p>    
                </div>
            </div>
        </section>`;
    }
}
customElements.define('summativ-comp', Summative);