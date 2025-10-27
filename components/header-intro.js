class HeaderIntro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <section class="header-intro" id="intro">
            <div class="colored-dots top-dots">
                    <div class="header-dot-yellow"></div>
                    <div class="header-dot-pink"></div>
                    <div class="header-dot-purple"></div>
                    <div class="header-dot-blue"></div>
                    <div class="header-dot-red"></div>
                    <div class="header-dot-orange"></div>
                    <div class="header-dot-green"></div>
            </div>

                <h1>FRONTEND <span>x</span> <img id="header-chasacademy-logo-desktop" src="images/chas-academy-logo.png"> <h1 id"header-text-kursplan"> KURSPLAN</h1>

             <div class="colored-dots bottom-dots">
                    <div class="header-dot-yellow"></div>
                    <div class="header-dot-pink"></div>
                    <div class="header-dot-purple"></div>
                    <div class="header-dot-blue"></div>
                    <div class="header-dot-red"></div>
                    <div class="header-dot-orange"></div>
                    <div class="header-dot-green"></div>
                    
                    

            </div>

                <p class="header-intro-text">
                    Denna kurs fokuserar på frontendutveckling med JavaScript, inklusive skapandet av dynamiska och interaktiva webbapplikationer. 
                </p>

                <div class="header-student-info">
                    <h3>Studerande lär sig hantera:</h3>

                    <div class="student-circles">
                        <div class="student-circle-orange">
                            <p>DOM</p>
                        </div>
                        <div class="student-circle-blue">
                            <p>API</p>
                        </div>
                        <div class="student-circle-pink">
                            <p>WCAG</p>
                        </div>
                    </div>

                    <p class="student-text">Kursen täcker också grundläggande UX/UI-principer, prestandaoptimering och säkerhet för att skapa användarvänliga och effektiva gränssnitt.</p>
                </div>

                <p class="header-outro-text">
                Efter en inledande inlärningsfas genomför studerande projekt där de praktiserar sina färdigheter i en arbetsliknande miljö.
                </p>

        </section>

        `;
  }
}
customElements.define('header-intro-cmp', HeaderIntro);
