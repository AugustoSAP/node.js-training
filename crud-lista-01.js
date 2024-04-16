const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pessoas = [
    { id: 1, nome: "João", idade: 20, email: "joao@email.com", telefone: "61900010002" },
    { id: 2, nome: "Maria", idade: 25, email: "maria@email.com", telefone: "61900020003" }
];


app.get('/pessoas', (req, res) => {
    res.json(pessoas);
});


app.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    res.json(pessoa);
});

app.post('/pessoas', (req, res) => {
    const novaPessoa = req.body;
    pessoas.push(novaPessoa);
    res.status(201).json(novaPessoa);
});

// Atualizar uma pessoa existente por ID
app.put('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoaIndex = pessoas.findIndex(p => p.id === id);
    if (pessoaIndex === -1) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    const pessoaAtualizada = { ...pessoas[pessoaIndex], ...req.body };
    pessoas[pessoaIndex] = pessoaAtualizada;
    res.json(pessoaAtualizada);
});


app.delete('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoaIndex = pessoas.findIndex(p => p.id === id);
    if (pessoaIndex === -1) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    const pessoaRemovida = pessoas.splice(pessoaIndex, 1);
    res.json({ message: 'Pessoa removida com sucesso', pessoaRemovida });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
