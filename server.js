// server.js
const express = require('express');
const exercises = require('./exercises');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint para lista completa de exercícios
app.get('/exercises', (req, res) => {
  res.json(exercises);
});

// Endpoint para exercício aleatório (para pausa Pomodoro)
app.get('/random-exercise', (req, res) => {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  res.json(exercises[randomIndex]);
});

// Rota raiz para teste
app.get('/', (req, res) => {
  res.send('API de Exercícios de Calistenia para Pomodoro rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});