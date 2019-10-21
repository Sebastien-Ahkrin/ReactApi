import { app } from './server'
import { index } from './routes'

const def: String = '/api/v1'

app.use(`${def}`, index)

export {
  app
}