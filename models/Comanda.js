const mongose = require ('mongose')

const schema = mongose.Schema({
    nome: String,
})

const Comanda = mongose.model('Comanda', schema)

module.exports = Comanda