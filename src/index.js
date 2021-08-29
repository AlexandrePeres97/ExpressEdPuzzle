const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let clients = [
    { id: 3, nome: 'Alexandre Peres', telefone: '53981369696' },
    { id: 1, nome: 'Alexandre Lemke', telefone: '53981369697' },
    { id: 2, nome: 'Angelo Luz', telefone: '53981369698' },
    { id: 4, nome: 'Angelo Escuro', telefone: '53981369699' },
]

/**
 * Retorna todos clientes em json
 */
app.get('/clients', (request, response) => response.json(clients))

/**
 * Buscar UM único recurso
 */
app.get('/clients/:id', (request, response) => {
    const client = clients.filter(value => value.id == request.params.id);
    response.json(client);
})

/**
* Inserir dados no servidor - BD
*/
app.post('/clients', (request, response) =>{
    const client = request.body;
    clients.push(client);
    response.json(client);

})

/**
 * Atualizar nome de clientes
 */
 app.put('/clients/:id', (request, response) => {
    const id = request.params.id;
    const nome = request.body.nome;
    let client = clients.filter(value => value.id == id);
    client[0].nome = nome;
    response.json(client[0]);

})

/**
 * Exclui o cliente atravez do id
 */
app.delete('/clients/:id', (request, response) => {
    const id = request.params.id;
    clients = clients.filter(value => value.id != id);
    response.json(clients);

})


app.listen(3000);