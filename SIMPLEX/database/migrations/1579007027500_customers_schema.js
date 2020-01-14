'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('lastName', 254)
      table.string('firstName', 254)
      table.string('email', 254)
      table.string('address', 254)
      table.integer('number')
      table.string('job', 254)
      table.text('other_details')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomersSchema
