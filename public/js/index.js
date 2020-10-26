const elPais = document.querySelector('#el-pais');
const elObservador = document.querySelector('#el-observador');
const laRepublica = document.querySelector('#la-republica');
const loading = document.querySelector('.loading');

window.onload = () => {
    getElpais();
    getElObservador();
    getLaRepublica();
}

elPais.addEventListener('scroll', (e) => { checkPosition(e) });
elObservador.addEventListener('scroll', (e) => { checkPosition(e) });
laRepublica.addEventListener('scroll', (e) => { checkPosition(e) });

async function getElpais() {
    let output = '';
    fetch('https://api.serpwow.com/live/search?api_key=AE9FA1B0710B4C6AAEAF22D2B5D23F7D&q=el+pais&google_domain=google.com.uy&location=Uruguay&gl=uy&hl=es&search_type=news')
        .then((res) => res.json())
        .then((data) => {
            data.news_results.forEach(element => {
                output += `<a href="${element.link}" target="_blank">
                <div class="item fr">
                    <div class="image-container">
                        <img src="${element.thumbnail}" alt="screenshot" class="screenshot">
                        <p class="time">${element.date}</p>
                    </div>
                    <div class="text-area fc">
                        <p class="titular">${element.title}</p>
                        <p class="snippet">${element.snippet}</p>
                    </div>
                </div></a>
                <hr class="line separator"></hr>`
            });
            elPais.innerHTML += output;
            document.querySelectorAll('.pre-load')[0].style.display = 'none';
        })
}

async function getElObservador() {
    let output = '';
    fetch('https://api.serpwow.com/live/search?api_key=AE9FA1B0710B4C6AAEAF22D2B5D23F7D&q=el+observador&google_domain=google.com.uy&location=Uruguay&gl=uy&hl=es&search_type=news')
        .then((res) => res.json())
        .then((data) => {
            data.news_results.forEach(element => {
                output += `<a href="${element.link}" target="_blank">
                <div class="item fr">
                    <div class="image-container">
                        <img src="${element.thumbnail}" alt="screenshot" class="screenshot">
                        <p class="time">${element.date}</p>
                    </div>
                    <div class="text-area fc">
                        <p class="titular">${element.title}</p>
                        <p class="snippet">${element.snippet}</p>
                    </div>
                </div></a>
                <hr class="line separator"></hr>`
            });
            elObservador.innerHTML += output;
            document.querySelectorAll('.pre-load')[1].style.display = 'none';
        })
}

async function getLaRepublica() {
    let output = '';
    fetch('https://api.serpwow.com/live/search?api_key=AE9FA1B0710B4C6AAEAF22D2B5D23F7D&q=la+republica&google_domain=google.com.uy&location=Uruguay&gl=uy&hl=es&search_type=news')
        .then((res) => res.json())
        .then((data) => {
            data.news_results.forEach(element => {
                output += `<a href="${element.link}" target="_blank">
                <div class="item fr">
                    <div class="image-container">
                        <img src="${element.thumbnail}" alt="screenshot" class="screenshot">
                        <p class="time">${element.date}</p>
                    </div>
                    <div class="text-area fc">
                        <p class="titular">${element.title}</p>
                        <p class="snippet">${element.snippet}</p>
                    </div>
                </div></a>
                <hr class="line separator"></hr>`
            });
            laRepublica.innerHTML += output;
            document.querySelectorAll('.pre-load')[2].style.display = 'none';
            loading.style.display = 'none';
        })
}

function checkPosition(e) {

    var parent = document.querySelector(`#${e.target.id}`).parentElement;
    var cardBottom = parent.childNodes[5];

    if (e.target.scrollTop > 750) {
        cardBottom.style.display = 'none';
    } else {
        cardBottom.style.display = 'block';
    }
}