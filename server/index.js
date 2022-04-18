// Creating Server
const express = require('express');
const path = require('path');
const Livres = require('./data/livres');

let app = express();
const port = 3001;
app.listen(port, () => {
    console.log(`Server Launch on Port : ${port}`);
});


// Configuration d'express
const distDir = '../src/';
app.use('/pages', express.static(path.join(__dirname, distDir, '/pages')));
app.use('/assets', express.static(path.join(__dirname, distDir, '/assets')));
app.use(express.json());

// Routes index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'pages/index.html'));
});

// Routes details.html
app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'pages/details.html'));
});

// Routes edit.html
app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'pages/edit.html'));
});

// Routes delete.html
app.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'pages/delete.html'));
});


/* app.get('/liste', (req, res) => {
    res.send(Livres);
}); */

app.get('/liste/:id', (req, res) => {
    let myId = req.params.id;
    Livres.forEach((elt) => {
        if (elt.id == myId) {
            res.send(elt);
        }
    });
});

// app.post('/liste', (req, res) => {
app.get('/list', (req, res) => {
    /* Livres.push(req.body); */
    res.send(Livres);
});