'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitPricesSchema extends Schema {
  up () {
    this.create('unit_prices', (table) => {
      table.increments()
      table.integer('price').defaultTo(0)
      table.integer('product_id').references('id').inTable('products')
      table.integer('user_id').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('unit_prices')
  }
}

module.exports = UnitPricesSchema
