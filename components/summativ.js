class Summative extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <section class="summativ mobileFirst">
            <div class="kunskap-wrap">
                <h1 id="kunskap">
                    <span class="kun-top">KUNSKAPS<span class="kun-dash">-</span></span>
                    <span class="kun-bottom">KONTROLL</span>
                </h1>
            </div>
            <div class="mobile-align">
                <h2 class="underline">SUMMATIV BEDÖMNING</h2>
                <p>Summativ bedömning utvärderar studerandes kunskaper och färdigheter retroaktivt för att sammanfatta vad
                den studerande kan vid examinationstillfället. Den summativa bedömningen täcker samtliga kursmål och sker vid
                följande avgränsade examinationstillfällen:</p>
            </div>
            <div class="grid-summativ">
                <div class="mobile-layout" id="summativ01">
                    <h3>SKRIFTLIGT KUNSKAPSTEST</h3>
                    <p>En individuell prövning av teoretiska kunskaper.</p>    
                </div>
                <div class="mobile-layout" id="summativ02">
                    <h3>SKRIFTLIG REFLEKTION</h3>
                    <p>En individuell redogörelse för egna lösningar och tillvägagångssätt.</p>    
                </div>
                <div class="mobile-layout" id="summativ03">
                    <h3>PROJEKTINLÄMNING</h3>
                    <p>En gruppinlämning där varje studerandes individuella insats bedöms.</p>    
                </div>
            </div>
        </section>
        <section class="formativ mobileFirst">
            <div class="mobile-align">
                <h2 class="underline">FORMATIV BEDÖMNING</h2>
                <p>Formativ bedömning utvärderar studerandes kunskaper och färdigheter löpande under kursens interaktiva
                lärandemoment. Syftet är att effektivisera bedömningen och samtidigt stödja lärandet. Den formativa
                bedömningen sker i samband med</p>
            </div>
            <div class="formativ-grid">
                <div>
                    <div class="mobile-layout" id="formative01">
                        <h3>WORKSHOPS</h3>
                        <p>Interaktiva undervisningstillfällen där klassen och utbildaren övar tillsammans.</p>
                    </div>
                        <div class="mobile-layout" id="formative02">
                        <h3>CHECKPOINTS</h3>
                        <p>Regelbundna avstämningar där studerande presenterar sina projekt och får direkt
                        återkoppling.</p>
                    </div>
                </div>
            </div>
            <p class="mobile-align">Formativ bedömning är ett komplement till summativ bedömning och tillämpas enbart till fördel för studerande.
            Studerande kan uppnå kursmål redan innan de summativa examinationerna genom formativ bedömning, men ett
            underkänt resultat kan aldrig enbart baseras på denna bedömningsform</p>
        </section>`;
    }
}
customElements.define('summativ-comp', Summative);