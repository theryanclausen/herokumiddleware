const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')


const productRouter = require('../products/productRouter')

const server =express()
server.use(express.json())
server.use(helmet())
server.use(morgan('short'))


server.get('/', (req,res) => {
    res.status(200).json({api: 'running'})
})


server.use('/api/products', productRouter)

module.exports= server