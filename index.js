require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const router = require('./router')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = process.env.PORT || 3999
const server = http.createServer(app)
server.listen(port)

console.log(`beep boop, I'm a server running on port ${port}`)