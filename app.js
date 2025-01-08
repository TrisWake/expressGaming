const express = require('express')
const logger = require('morgan')
const index = require('/')
const game = require('/api/game')

const app = express()
app.use(logger('dev'))
app.use(express.json())
