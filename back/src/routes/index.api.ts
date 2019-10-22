import { Request, Response } from "express"
import { router } from './../server'

const path: string = '/security'

const emailRegex: string = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/g.toString()
const pseudoRegex: string = /^[a-zA-Z]{3,16}$/g.toString()
const passwordRegex: string = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\-])(?=.{8,})/g.toString()

router.get(`${path}/validate`, async (request: Request, response: Response) => {
  response.status(200).json({
    email: emailRegex,
    pseudo: pseudoRegex,
    password: passwordRegex
  })
})

export default router