'use strict'

const qS = require('query-string')

module.exports = {
  find: async (ctx) => {
    const categories = qS.parse(ctx.req._parsedUrl.query).categories

    const fields = await strapi.query('product').find({ category_in: categories.split(',').map(el => +el) })

    ctx.body = fields
  }
}
