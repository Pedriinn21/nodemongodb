

const mongose = require ('mongose')

const schema = mongose.Schema({
    nome: String,
})

const Cliente = mongose.model('Cliente', schema)

module.exports = Cliente