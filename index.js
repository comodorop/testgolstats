require('dotenv').config()

const express = require('express')
const app = express()
const clients = require('./routes/clients')
const middleware = require('./middleware/index')

app.use(middleware.verifyUsers)
app.use('/v1/clients', clients)

app.listen(process.env.PORT, ()=>{
  console.log(`Server on ${process.env.PORT} `)
})

