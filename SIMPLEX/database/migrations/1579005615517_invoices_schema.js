'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoicesSchema extends Schema {
  up () {
    this.create('invoices', (table) => {
      table.increments()
      table.integer('invoice_state_id').references('id').inTable('invoice_states')
      table.integer('user_id').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('invoices')
  }
}

module.exports = InvoicesSchema
