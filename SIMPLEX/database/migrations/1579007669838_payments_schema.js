'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentsSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments()
      table.integer('invoice_id').references('id').inTable('invoices')
      table.integer('customer_id').references('id').inTable('customers')
      table.integer('amount')
      table.integer('user_id').references('id').inTable('user')
      table.timestamps()
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentsSchema
