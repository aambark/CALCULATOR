// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');
const historique = document.getElementById('historique-texte');

let historiqueArray = [];

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
});

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                historiqueArray = [];
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                historiqueArray.push(ecran.textContent + " = " + calcul);
                historique.innerHTML = historiqueArray.join("<br>");
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
                historiqueArray.push(touche.innerHTML);
                historique.innerHTML = historiqueArray.join("<br>");
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
});