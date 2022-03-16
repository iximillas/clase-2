//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "ola q tal";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "buenas tardes :)";
} else {
    elSaludo = "wenas noches los pastores";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=3&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index :)").parent("vinculos");
    createA("page.html", "page :)").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}
function portada() {
    createSpan(" ¿Sabías que " + starWars.results[3].name + " nació el año " + starWars.results[3].birth_year + "?").parent("contenido");
    select("a:nth-child(1)").style("color", "#94C8CE");
}
function pagina() {
    createSpan(" ¿Sabías que " + starWars.results[9].name + " tiene la piel de color " + starWars.results[9].skin_color + "?").parent("contenido");
    select("a:nth-child(2)").style("color", "#94C8CE");
}
