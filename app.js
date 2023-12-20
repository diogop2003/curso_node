import express from 'express'

const app = express();

app.get('/', function (req, res) {
  res.send('Olá Mundo!')
})

app.get('/user/:nome/:sobrenome', function (req, res) {
  res.send({
    nome: req.params.nome,
    sobrenome: req.params.sobrenome,
  })
})

// app.delete("/user", function(req, res) {
//  res.send({
//    nome: "Diogo DELETADO"
//  })
// })

app.listen(8080, function () {
  console.log('Servidor Rodando')
})
