const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const { query } = require('express')


const server = express()
const port = 4001

server.use(json());
server.use(cors());

let contador = 0
let user = [];

server.get('/', (req, res) => {
    res.status(200).send(user)
})

server.post('/', (req, res) => {
    const request = req.body
    const user2 = {
        id: contador += 1,
        user: request.user
    }
    user.push(user2)
    res.status(201).send()
})

server.delete('/', (req, res) => {
    user = [];
    res.status(200).send()
    contador = 0
})

server.delet('/query', (req, res) => {
    const queryid = req.query.id

    filteredlist = user.filter(user => user.id != queryid)
    user = filteredlist
    res.status(200).send()
})

server.put('/:value', (req, res) => {
    const value = req.params.value
    const id = req.query.id
    console.log(`QUERY IS ${id} AND PARAMETER IS ${value}`)

    user.map(user => {
        if (user.id == id){
            console.log(`FOUND ID ${id} CHANGING VALUE OF OBJECT`)
            user.user = value
        }
    });

    res.send(200).send()
})

server.listen(port, (req, res)=>{
    console.log(`Server rodando na porta: ${port}` )
})