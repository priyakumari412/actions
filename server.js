let express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send("hello server!")
})

module.exports = app
