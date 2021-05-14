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
  // const categoriesOnMainRaw = await fetch(`${STRAPI_URL}/page-home-settings?name=category_on_home`)
  // const categoriesOnMain = await categoriesOnMainRaw.json()

  // const productsRaw = await fetch(`${STRAPI_URL}/products?categories=${categoriesOnMain[0].value}`)
  const productsRaw = await fetch(`${STRAPI_URL}/products?categories=${req.query.categories}`)
  const products = await productsRaw.json()

  // console.log(products)
  return res.render('pages/home', { products })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
