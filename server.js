const fetch = require('node-fetch')
const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')

const { STRAPI_URL } = require('./consts')

const app = express()
const port = 4000

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(
  '/uploads',
  createProxyMiddleware({ target: STRAPI_URL, changeOrigin: true })
)

app.get('/', async (req, res) => {
  fetch(`${STRAPI_URL}/page-home-settings?name=category_on_home`)
    .then((res) => res.json())
    .then((categoriesOnMain) => {
      fetch(`${STRAPI_URL}/products?category_contains=${categoriesOnMain[0].value}`)
        .then((res) => res.json())
        .then((products) => {
          console.log(products)
          res.render('pages/home', { products })
        })
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
