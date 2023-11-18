const express = require('express')
const serverless = require('serverless-http')
const app = express();
const router = express.Router()

router.get('/', (req,res) => {
    res.json({
        'name' : 'Haripriya1'
    })
})

router.get('/json', (req,res) => {
    res.json({
        'name' : 'Haripriya'
    })
})

app.use('/.netlify/functions/api/', router)

module.exports.handler = serverless(app)