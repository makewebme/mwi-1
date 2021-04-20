const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'pug')

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.render('mainContent', { title: 'Hey', message: 'Hello there!'});
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
