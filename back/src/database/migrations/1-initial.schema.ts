'use strict'

import * as Knex from 'knex'

const tableName: string = 'credentials'

const up = (knex: Knex) => knex.schema.createTable(tableName, (table: Knex.CreateTableBuilder) => {
  table.increments('id').primary()
  table.string('email', 50)
  table.string('password')

  table.boolean('blocked').defaultTo(false)
  table.unique(['email'])
})

const down = (knex: Knex) => knex.schema.dropTableIfExists(tableName)

export {
  up, down
}