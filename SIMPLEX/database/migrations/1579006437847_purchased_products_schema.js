'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchasedProductsSchema extends Schema {
  up () {
    this.create('purchased_products', (table) => {
      table.increments()
      table.integer('invoice_id').references('id').inTable('invoices')
      table.integer('product_id').references('id').inTable('products')
      table.integer('quantity').defaultTo(0)
      table.integer('reduction_rate').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('purchased_products')
  }
}

module.exports = PurchasedProductsSchema
