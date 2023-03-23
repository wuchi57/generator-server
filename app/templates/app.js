const express = require('express')
const bodyParser = require('body-parser')
const { config }= require('dotenv')

config()

const host = '0.0.0.0'
const port = 8000
const app = express()

// const urlEncode = bodyParser.urlencoded({ extended: false, limit: '50mb' })
// app.use(urlEncode)
const json = bodyParser.json({ limit: '50mb' })
app.use(json)

app.use(require('./router/cors'))
app.use(require('./router/login'))
app.use(require('./router/auth'))
app.use(require('./router/user'))
app.use(require('./router/404'))
app.use(require('./router/error'))

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})
