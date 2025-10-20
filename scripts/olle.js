const imgCircle = document.getElementById("dev-purple");
let lastDoubleClick = 0;

imgCircle.addEventListener("dblclick", (event) => {
    // for some reason firefox fires doubleclicks twice... The check below stops that from happening
    let now = Date.now();
    if (now - lastDoubleClick < 500) return;
    lastDoubleClick = now;
    alert("Olle's GitHub: https://github.com/ollewarne");
})
