const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
const mongoose = require('mongoose');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/obras', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.log('Erro de conexão:', err));
  const obraSchema = new mongoose.Schema({
    nome: String,
    prazo: Date,
  });
  
  const Obra = mongoose.model('Obra', obraSchema);
  const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Verifique o usuário e senha aqui
  const token = jwt.sign({ username }, 'secreta', { expiresIn: '1h' });
  res.json({ token });
});
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('Novo usuário conectado');
  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});
