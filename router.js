const express = require('express')
const axios = require('axios')

const CLIENT_ID = process.env.UNSPLASH_API
const CLIENT_SECRET = process.env.UNSPLASH_API_SECRET

module.exports = function(app) {
  app.get('/', (req, res, next) => 
    res.send('<img src="https://media1.tenor.com/images/1fcea016af432389e7b444ae3b95abf2/tenor.gif">'))

  app.get('/gettoken/:code/', async (req, res, next) => {    
    const body = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: 'http://localhost:3000/login',
      code: req.params.code,
      grant_type: 'authorization_code',
    }

    try {
      const response = await axios.post('https://unsplash.com/oauth/token', body)      
      res.send(JSON.stringify(response.data))
    } catch(e) {
      console.error(e)
      res.status(500).send({
        errors: 'Something went wrong... you may be using an invalid token'
      })
    }
  })
}


