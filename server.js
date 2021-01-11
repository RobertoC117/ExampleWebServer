const express = require('express');
const app = express();
const hbs = require('hbs');

//Los helpers se ejecutan con esta llamada
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//Partials
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home',{
                        nombre:"roberto carlos sánchez hernández"
                    }
    );
})

app.get('/about', (req, res) => {
    res.render('about');
})

// app.get('/', (req, res) => {
//     res.send("Hello world!.");
// })

// app.get('/data', (req, res) => {
//     let datos = {
//         nombre: "Roberto", 
//         edad: 20,
//         url: req.url
//     };
//     res.send(datos)
// }) 

app.listen(3000, () =>{
    console.log("Escuchando peticiones en el puerto 3000")
})