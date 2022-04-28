const express = require('express')
const Router = express.Router()
const {router} = require('express');

let contador = 0
let user = [];

Router.get('/', (req, res) =>{

    res.status(200).send(user)

})

Router.get('/user', (req, res) =>{
    const pathId = req.params.id
    const user2 = user.filter(user => user.id == pathId).
    res.status(200).send(user)
})

Router.post('/', (req, res) => {

    const request = req.body
    const user2 = {
        id: contador += 1,
        user: request.user
    }
    user.push(user2)
    res.status(201).send()
})

Router.delete('/', (req, res) => {
    user = [];
    res.status(200).send()
    contador = 0
})

Router.delete('/query', (req, res) => {
    const queryid = req.query.id

    filteredlist = user.filter(user => user.id != queryid)
    user = filteredlist
    res.status(200).send()
})

Router.put('/:value', (req, res) => {
    const value = req.params.value
    const id = req.query.id
    console.log(`QUERY É ${id} E PARÂMETRO É ${value}`)

    user.map(user => {
        if (user.id == id){
            console.log(`ID ENCONTRADO ${id} ALTERANDO O VALOR DO OBJETO`)
            user.user = value
        }
    });
    res.send(200).send()
})

module.exports = Router;