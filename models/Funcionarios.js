

const mongose = require ('mongose')

const schema = mongose.Schema({
    nome: String,
})

const Funcionarios = mongose.model('Funcionarios', schema)

module.exports = Funcionarios