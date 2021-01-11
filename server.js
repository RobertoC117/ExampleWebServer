const express = require('express');
const app = express();
const hbs = require('hbs');

//Los helpers se ejecutan con esta llamada
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//Partials
hbs.registerPartials(__dirname + '/views/partials')

//middleware para usar hbs para renderizar las vistas
app.set('view engine', 'hbs')

//respuesta para una peticion get en la direccion /
app.get('/', (req, res) => {
    //renderiza el home(hbs) y pasa como parametros la variable del nombre
    res.render('home',{
                        nombre:"roberto carlos sánchez hernández"
                    }
    );
})

//respuesta para una peticion get en la direccion /about
app.get('/about', (req, res) => {
    //renderiza el about(hbs)
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