import Knex from 'knex'
import { Model } from 'objection'
import { development as config } from './knexfile'

import Credentials from './model/credentials.model'

const knex: Knex<any, any[]> = Knex(config)
Model.knex(knex)

export {
  Credentials
}