const express = require('express')
const logger = require('morgan')
const indexRoutes = require('/')
const gameRoutes = require('./gameRoutes')

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use('/api/game',gameRoutes)
app.use('/',indexRoutes)

app.listen(3000, ()=>{
    console.log("Server started.")
})
