const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, console.log(`SERVER CONNECTED ON PORT ${PORT}`))