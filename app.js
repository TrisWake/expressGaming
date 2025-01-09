const express = require('express')
const logger = require('morgan')
const indexRoutes = require('/')
const gameRoutes = require('/api/game')

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(gameRoutes)
app.use(indexRoutes)

app.listen(3000, ()=>{
    console.log("Server started.")
})
