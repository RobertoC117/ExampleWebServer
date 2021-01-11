const hbs = require('hbs');

//Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

//Helper que pone en mayuscula la primera letra de cada palabra del texto
hbs.registerHelper('capitalizar', (texto) => {
    let words = texto.split(' ');
    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })

    return words.join(' ');
})