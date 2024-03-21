const mongose = require ('mongose')

const schema = mongose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Produto = mongose.model('Produto', schema)

module.exports = Produto