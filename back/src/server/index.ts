import express, { Router, Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const router: Router = Router()
const app: Application = express()

app.use(bodyParser.json())
app.use(cors())

const port: Number = Number(process.env.PORT) || 8080
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

export {
  app, router
}