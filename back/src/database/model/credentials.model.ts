'use strict'

import { Model } from 'objection'
import { hash, argon2id } from 'argon2'

class Credentials extends Model {

  password: string = ''
  email: string = ''

  static get tableName () {
    return 'credentials'
  }

  async $beforeInsert () {
    this.password = await hash(this.password, { type: argon2id, memoryCost: 2 ** 16, hashLength: 64 })
  }

  static async getByEmail (email: string) {
    return await this.query().where('email', '=', email).first()
  }

}

export default Credentials