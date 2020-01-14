'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.createIfNotExists('users', (table) => {
      table.increments()
      table.string('lastName', 254).notNullable()
      table.string('firstName', 254).notNullable()
      table.string('email', 254).notNullable()
      table.string('address', 254).notNullable()
      table.string('password', 60).notNullable()
      table.integer('role_id').references('id').inTable('roles')
      table.timestamps()      
    })
  }

  down () {
    this.dropIfExists('users')
  }
}

module.exports = UserSchema
