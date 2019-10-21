import { Request, Response } from "express"
import { router } from './../server'

router.get('/', (request: Request, response: Response) => {
  response.status(200).json({ text: 'Hello, World!' })
})

export default router