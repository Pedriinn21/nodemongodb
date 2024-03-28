const mongose = require ('mongoose')

const schema = mongose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
    ingredientes: []
})

const Produto = mongose.model('Produto', schema)

module.exports = Produto