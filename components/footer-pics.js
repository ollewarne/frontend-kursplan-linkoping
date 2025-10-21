class FooterPicComp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="dev-pics">

            <h3>DEVELOPERS</h3>

            <!-- Circles: row 1 -->
            <div class="dev-pics-row-1">

                <!-- ---------- circle 1: orange ---------- -->
                <div id="dev-orange" class="dev-circle">
                    <img src="images/Ingrid.jpg" alt="Portrait">
                </div>

                <!-- ---------- circle 2: green ----------  -->
                <div id="dev-green" class="dev-circle">
                    <img src="images/jagochmat1.jpg" alt="Portrait">
                </div>

                <!-- ---------- circle 3: pink ----------  -->
                <div id="dev-pink" class="dev-circle">
                    <img src="images/marten.jpg" alt="Portrait">
                </div>

                <!-- ---------- circle 4: blue ----------  -->
                <div id="dev-blue" class="dev-circle">
                    <img src="" alt="Portrait">
                </div>
            </div>

            <!-- Circles: row 2 -->
            <div class="dev-pics-row-2"> 

                <!-- ---------- circle 5: purple ----------  -->
                <div id="dev-purple" class="dev-circle">
                    <img src="./images/olle.png" alt="Portrait">
                </div>
                <!-- ---------- circle 6: yellow ---------- -->
                <div id="dev-yellow" class="dev-circle">
                    <img src="./images/Twana.jpg" alt="Portrait">
                </div>
                <!-- ---------- circle 7: red ----------  -->
                <div id="dev-red" class="dev-circle">
                    <img src="" alt="Portrait">
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('footer-pics', FooterPicComp);
