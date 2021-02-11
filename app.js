const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const SerpWow = require('google-search-results-serpwow');
require('dotenv').config();

var serpwow = new SerpWow(process.env.API_KEY);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(PORT, () => console.log('Server started on port: ' + PORT));

app.get('/', async function (req, res) {
    let data_elPais = await getElPais();
    let data_elObservador = await getElObservador();
    let data_laRepublica = await getLaRepublica();

    res.render('pages/index.ejs', {
        elpais: data_elPais,
        elobservador: data_elObservador,
        larepublica: data_laRepublica
    });
});

app.use((req, res) => {
    res.end('Error 404 not found');
});

async function getElPais() {
    const params = {
        q: 'el pais',
        search_type: 'news',
        gl: 'uy',
        hl: 'es',
        location: 'Uruguay',
        google_domain: 'google.com.uy',
        num: '10'
    }

    return new Promise(function (resolve, reject) {
        resolve(serpwow.json(params)
            .then(data => {
                return data.news_results;
            })
            .catch(error => {
                console.log(error);
            }))
    })
}

async function getElObservador() {
    const params = {
        q: 'el observador',
        search_type: 'news',
        gl: 'uy',
        hl: 'es',
        location: 'Uruguay',
        google_domain: 'google.com.uy',
        num: '10'
    }

    return new Promise(function (resolve, reject) {
        resolve(serpwow.json(params)
            .then(data => {
                return data.news_results;
            })
            .catch(error => {
                console.log(error);
            }))
    })
}

async function getLaRepublica() {
    const params = {
        q: 'la republica',
        search_type: 'news',
        gl: 'uy',
        hl: 'es',
        location: 'Uruguay',
        google_domain: 'google.com.uy',
        num: '10'
    }

    return new Promise(function (resolve, reject) {
        resolve(serpwow.json(params)
            .then(data => {
                return data.news_results;
            })
            .catch(error => {
                console.log(error);
            }))
    })
}