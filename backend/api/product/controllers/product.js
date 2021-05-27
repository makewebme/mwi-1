'use strict'

const qS = require('query-string')
const Promise = require('bluebird')

module.exports = {
  find: async (ctx) => {
    const categories = qS.parse(ctx.req._parsedUrl.query).categories

    let productsOnMain = []

    const catsArr = categories.split(',')

    await Promise.map(catsArr, async (catNumber) => {
      const category = await strapi.query('category').findOne({ id: catNumber })
      const products = await strapi.query('product').find({ category_in: catNumber })

      productsOnMain.push({
        categoryName: category.name,
        products
      })
    })

    ctx.body = productsOnMain
  }
}
