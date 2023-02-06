/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { Routes } from './routes/routes'
import cors from 'cors'

export class App {
    public app: express.Application
    public appRoutes: Routes
    constructor () {
        this.app = express()
        // enabling cors
        const allowedOrigins = process.env.ALLOWED_ORIGINS
        this.app.use(cors({
            origin: function (origin, callback) {
            // bypass the requests with no origin (like curl requests, mobile apps, etc )
            if (!origin) return callback(null, true)

            if (allowedOrigins.indexOf(origin) === -1) {
                const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`
                return callback(new Error(msg), false)
            }
            return callback(null, true)
            }
        }))

        // support application/json type post data
        this.app.use(express.json())
        // support application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false }))   
              
        this.appRoutes = new Routes()
        this.appRoutes.routes(this.app)
    }

}