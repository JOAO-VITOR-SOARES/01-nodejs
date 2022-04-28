const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const users = require('./paginas/Routes/routes')

const server = express()
const port = 4001

server.use(json());
server.use(cors());
server.use('/user', users);

server.listen(port, (req, res)=>{
    console.log(`Server rodando na porta: ${port}`)
})