require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    return res.status(200).json({ mensagem: 'Tudo ok' });
})

app.listen(port, () => console.log(`Servidor operando na porta: ${port} `));