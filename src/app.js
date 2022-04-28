const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const users = require('./paginas/Routes/routes')

const server = express()
const port = 4001

server.use(json());
server.use(cors());
server.use('/user', users);

server.get('/',( req, res) => {
    res.status(200).send(

        `<html>
        <head></head>
        <body>
            <h1> This is a Server Side Render Web page</h1>
            <div>
                <p> Ok, I'm running on port ${port}.
            </div>
            <h2>Server RESTful Endpoints:</h2>
            <ul>
                <li>curl -X POST http://localhost:4001/USUARIOS -H 'Content-Type: application/json' -d "{\"USUARIOS\": {value}}"</li>
                <li>curl -X GET http://localhost:4001/usuarios</li>
                <li>curl -X GET http://localhost:4001/USERS/{id}</li>
                <li>curl -X PUT http://localhost:4001/users/{users}?id={id}</li>
                <li>curl -X DELETE http://localhost:4001/USER</li>
                <li>curl -X DELETE http://localhost:4001/user/query?id={id}</li>
            </ul>
        </body>
    </html>
    `
    )
})

server.listen(port, (req, res)=>{
    console.log(`Server rodando na porta: ${port}`)
})