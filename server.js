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
  const categoriesOnMainRaw = await fetch(`${STRAPI_URL}/page-home-settings?name=category_on_home`)
  const categoriesOnMain = await categoriesOnMainRaw.json()

  const productsOnMainRaw = await fetch(`${STRAPI_URL}/products?categories=${categoriesOnMain[0].value}`)
  const productsOnMain = await productsOnMainRaw.json()

  return res.render('pages/home', { productsOnMain })
})


app.get('/catalog', async (req, res) => {
  const categoriesRaw = await fetch(`${STRAPI_URL}/categories`)
  const categories = await categoriesRaw.json()

  return res.render('pages/catalog', { categories })
})


app.get('/catalog/:categoryId', async (req, res) => {
  const productsInCategoryRaw = await fetch(`${STRAPI_URL}/products?categories=${req.params.categoryId}`)
  const productsInCategory = await productsInCategoryRaw.json()

  return res.render('pages/catalog-products-in-category', { productsInCategory })
})


app.get('/products/:id', async (req, res) => {
  const productDetailsRaw = await fetch(`${STRAPI_URL}/products/${req.params.id}`)
  const productDetails = await productDetailsRaw.json()

  return res.render('pages/product-details', { productDetails })
})



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
