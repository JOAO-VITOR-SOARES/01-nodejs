const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const TemperatureSchema = require('../models/Temperature')
const UserSchema = require('../models/Users')
const SECRET = "joao"

//PARA VALIDAR A REQUISIÇÃO
const expressValidator = require('express-validator')
const auth = require('../middlewares/auth')

const validate = [
    expressValidator.check('temperature').isLength({ min: 1 }).withMessage("Campo temperatura tem que ter o tamanho maior ou igual a 1"),
    expressValidator.check('temperature').isNumeric().withMessage("Field temperature should be a number")
]

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end("verifique o token");


        req.userId = decoded.userId;
        next();
    })
}

//GET ALL - TUDO
router.get('/', verifyJWT, (req, res) => {
    TemperatureSchema.find()
        .then(temperatures => {
            console.log(req.userId + 'fez esta chamada!');
            res.status(200).send(temperatures);
        })
        .catch(err => {
            res.status(400).send(err)
        })
});

router.get('/:id', (req, res) => {
    TemperatureSchema.findById(req.params.id)
        .then(temperature => {
            res.status(200).send(temperature);
        })
        .catch(err => {
            res.status(400).send(err)
        })
})


router.post('/login', auth, (req, res) => {
    TemperatureSchema.find().then((temperature) => {
        const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 })
        return res.json({ auth: true, token: token });
    }).catch((error) => {
        res.status(402).end()
    })
})

router.delete('/', (req, res) => {

    TemperatureSchema.deleteMany().then(result => {
        res.status(200).send()
    });
})

//DELETE BY ID
router.delete('/query', (req, res) => {
    const queryId = req.query.id

    TemperatureSchema.findByIdAndDelete(queryId)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
            res.status(400).send()
        })
})

//PUT EDITAR ITEM
router.put('/:value', (req, res) => {
    const pathValue = req.params.value
    const queryId = req.query.id

    TemperatureSchema.findByIdAndUpdate(queryId, { temperature: pathValue })
        .then(result => {
            res.status(200).send()
        })
        .catch(err => {
            res.status(400).send()
        })

});

module.exports = router;


