class Formativ extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="formativ">
        <div class="summativ-align">
        <h2 class="underline">FORMATIV BEDÖMNING</h2>
        <p>Formativ bedömning utvärderar studerandes kunskaper och färdigheter löpande under kursens interaktiva
        lärandemoment. Syftet är att effektivisera bedömningen och samtidigt stödja lärandet. Den formativa
        bedömningen sker i samband med</p>
        </div>
    <div class="formativ-grid">
        <div>
            <div class="formativ-layout" id="formative01">
                <h3>WORKSHOPS</h3>
                <p>Interaktiva undervisningstillfällen där klassen och utbildaren övar tillsammans.</p>
            </div>
            <div class="formativ-layout" id="formative02">
                <h3>CHECKPOINTS</h3>
                <p>Regelbundna avstämningar där studerande presenterar sina projekt och får direkt
                återkoppling.</p>
            </div>
        </div>
    </div>
    <p class="summativ-align">Formativ bedömning är ett komplement till summativ bedömning och tillämpas enbart till fördel för studerande.
    Studerande kan uppnå kursmål redan innan de summativa examinationerna genom formativ bedömning, men ett
    underkänt resultat kan aldrig enbart baseras på denna bedömningsform</p>
    </section>`;
    }
}
customElements.define('formativ-comp', Formativ);