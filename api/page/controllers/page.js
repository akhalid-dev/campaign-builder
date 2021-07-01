"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");
const fs = require("fs");

module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services.page.findOne({ id:slug });
    return sanitizeEntity(entity, { model: strapi.models.page });
  },

  async saveOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services.page.findOne({ id:slug });
    fs.writeFileSync(
      `version/${slug}.html`,
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>${entity.Content.css}</style>
          <title>Document</title>
      </head>
      <body style="width: 1280px;">
          ${entity.Content.html}
      </body>
      </html>
      `
    );

    return sanitizeEntity(entity, { model: strapi.models.page });
  },

  async update(ctx) {
    const { slug } = ctx.params;
    const storeState = ctx.request.body;
    const entity = await strapi.services.page.findOne({ id:slug });
    entity.Store = storeState;
    entity.Content = {
      html: storeState["gjs-html"],
      css: storeState["gjs-css"],
    };
    let newentity = await strapi.services.page.update({ id:slug }, entity);
    return sanitizeEntity(newentity, { model: strapi.models.page });
  },

  async putOneStore(ctx) {
    const { slug } = ctx.params;
    const storeState = ctx.request.body;
    const entity = await strapi.services.page.findOne({ id:slug });
    entity.Store = storeState;
    entity.Content = {
      html: storeState["gjs-html"],
      css: storeState["gjs-css"],
    };

    let newentity = await strapi.services.page.update({ id:slug }, entity);
    return sanitizeEntity(newentity, { model: strapi.models.page });
  },
};
