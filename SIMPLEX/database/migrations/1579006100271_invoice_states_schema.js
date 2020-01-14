'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoiceStatesSchema extends Schema {
  up () {
    this.create('invoice_states', (table) => {
      table.increments()
      table.string('denomination', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('invoice_states')
  }
}

module.exports = InvoiceStatesSchema
