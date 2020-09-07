const elPais = document.querySelector('#el-pais');
const elObservador = document.querySelector('#el-observador');
const laRepublica = document.querySelector('#la-republica');

var methods = {
    elpais: {
        local: './elpais.json',
        url: 'https://api.serpwow.com/live/search?api_key=822DBDEE173F428A8AD0C283561781AB&q=el+pais&google_domain=google.com.uy&location=Uruguay&gl=uy&hl=es&search_type=news'
    },
    elobservador: {
        local: './elobservador.json',
        url: 'https://api.serpwow.com/live/search?api_key=822DBDEE173F428A8AD0C283561781AB&q=el+observador&google_domain=google.com.uy&location=Uruguay&gl=uy&hl=es&search_type=news'
    },
    larepublica: {
        local: './larepublica.json',
        url: 'https://api.serpwow.com/live/search?api_key=822DBDEE173F428A8AD0C283561781AB&q=la+republica&google_domain=google.com.uy&location=Uruguay&gl=uy&hl=es&search_type=news'
    }
}

window.onload = () => {
    loadTemplate();
    getElpais();
    getElObservador();
    getLaRepublica();
}

elPais.addEventListener('scroll', (e) => { checkPosition(e) });
elObservador.addEventListener('scroll', (e) => { checkPosition(e) });
laRepublica.addEventListener('scroll', (e) => { checkPosition(e) });

async function getElpais() {
    let output = '';
    fetch(methods.elpais.local)
        .then((res) => res.json())
        .then((data) => {
            data.news_results.forEach(element => {
                output += `<div class="item fr">
                    <div class="image-container">
                        <img src="${element.thumbnail}" alt="screenshot" class="screenshot">
                        <p class="time">${element.date}</p>
                    </div>
                    <div class="text-area fc">
                        <p class="titular">${element.title}</p>
                        <a href="${element.link}" target="_blank"><p class="leer-mas">Leer noticia completa</p></a>
                    </div>
                </div>
                <hr class="line separator"></hr>`
            });
            elPais.innerHTML += output;
        })
}

async function getElObservador() {
    let output = '';
    fetch(methods.elobservador.local)
        .then((res) => res.json())
        .then((data) => {
            data.news_results.forEach(element => {
                output += `<div class="item fr">
                    <div class="image-container">
                        <img src="${element.thumbnail}" alt="screenshot" class="screenshot">
                        <p class="time">${element.date}</p>
                    </div>
                    <div class="text-area fc">
                        <p class="titular">${element.title}</p>
                        <a href="${element.link}" target="_blank"><p class="leer-mas">Leer noticia completa</p></a>
                    </div>
                </div>
                <hr class="line separator"></hr>`
            });
            elObservador.innerHTML = output;
        })
}

async function getLaRepublica() {
    let output = '';
    fetch(methods.larepublica.local)
        .then((res) => res.json())
        .then((data) => {
            data.news_results.forEach(element => {
                output += `<div class="item fr">
                    <div class="image-container">
                        <img src="${element.thumbnail}" alt="screenshot" class="screenshot">
                        <p class="time">${element.date}</p>
                    </div>
                    <div class="text-area fc">
                        <p class="titular">${element.title}</p>
                        <a href="${element.link}" target="_blank"><p class="leer-mas">Leer noticia completa</p></a>
                    </div>
                </div>
                <hr class="line separator"></hr>`
            });
            laRepublica.innerHTML = output;
        })
}

function loadTemplate() {

}

function checkPosition(e) {

    var parent = document.querySelector(`#${e.target.id}`).parentElement;
    console.log(e.target.id);
    var cardBottom = parent.childNodes[5];
    console.log(cardBottom);

    if (e.target.scrollTop > 750) {
        cardBottom.style.display = 'none';
    } else {
        cardBottom.style.display = 'block';
    }
}