const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req,res) => {
    res.json({mssg: 'welcome '})
})
app.listen(process.env.PORT , () => {
    console.log('listening on port 4000')
})

process.env