const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/postagens', async (req, res) => {
  try {
    const response = await fetch('https://api-fake-blog.onrender.com/postagens/');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar postagens' });
  }
});

app.get('/api/postagem/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://api-fake-blog.onrender.com/postagem/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar postagem' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
