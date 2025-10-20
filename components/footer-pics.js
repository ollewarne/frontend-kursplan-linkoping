class FooterPicComp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-pics footer-pics01" id="footer-row1">
        <div id="row1-01">01 <img src="" alt="Portrait" class="footer-size" ></div>
        <div id="row1-02">02 <img src="" alt="Portrait" class="footer-size" ></div>
        <div id="row1-03">03 <img src="" alt="Portrait" class="footer-size" ></div>
        <div id="row1-04">04 <img src="" alt="Portrait" class="footer-size" ></div>
    </div>
    <div class="footer-pics footer-pics02" id="footer-row2">
        <div id="row2-01">01 <img src="" alt="Portrait" class="footer-size" ></div>
        <div id="row2-02">02 <img src="" alt="Portrait" class="footer-size" ></div>
        <div id="row2-03">03 <img src="" alt="Portrait" class="footer-size" ></div>
    </div>`;
    }
}
customElements.define('footer-pics', FooterPicComp);