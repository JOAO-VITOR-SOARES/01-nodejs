const express = require('express')
const Router = express.Router()
const { router } = require('express');

const expressValidator = require('express-validator')

let contador = 0
let user = [];

const validate = [
    expressValidator.check('user').isLength({ min: 1 }).withMessage('Usuarios não encontrado')
]

outer.get('/', auth, (req, res) => {

    user.find().then(users => {
        res.status(200).send(users);
    }).catch(error => {
        res.status(500).send(error)
    })
})


Router.get('/user', (req, res) => {
    const pathId = req.params.id
    const user2 = user.filter(user => user.id == pathId).
        res.status(200).send(user)
})

Router.post('/', [validate], (req, res) => {

    const erros = expressValidator.validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(422).send({ erros: erros.array() })
    }
    const user = new user({
        user: req.body.user
    })

    user.save()
        .then(result => {
            res.status(201).send(result)
        })

})

router.delete('/', (req, res) => {

    user.deleteMany().then(result => {
        res.status(200).send()
    });
})


router.delete('/query', (req, res) => {

    Temperature.findByIdAndRemove(req.query.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(error => {
            res.status(404).send()
        })
})

router.put('/:value', (req, res) => {
    const pathValue = req.params.value

    user.findById(req.query.id).then(users => {
        users.users = pathValue
        user.save().then(result => {
            res.status(200).send(result)
        })
    }).catch(error => {
        res.status(404).send()
    })

})
module.exports = Router;