const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());

app.post('/check-url', async (req, res) => {
  try {
    const apiKey = '842fdcd04948ec11f1a2d3818c093f77d0f718ddf1405d4c7a7010beac58f59a';
    const apiUrl = `https://www.virustotal.com/vtapi/v2/url/report?apikey=${apiKey}&resource=${req.body.url}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao verificar a URL', error);
    res.status(500).json({ message: 'Erro ao verificar a URL' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor intermediário em execução na porta ${PORT}`);
});
