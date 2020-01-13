'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StocksSchema extends Schema {
  up () {
    this.create('stocks', (table) => {
      table.increments()
      table.string('generate_name', 80).notNullable().unique()
      table.integer('price').defaultTo(0)
      table.integer('supplier_id').references('id').inTable('suppliers')
      table.date('buy_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('stocks')
  }
}

module.exports = StocksSchema
