const express = require('express')

const router = express.Router()


router.get('/', (req,res)=>{
    res.send('GET /products')
})

module.exports = router