/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { Routes } from './routes/routes'

export class App {
    public app: express.Application
    public appRoutes: Routes
    constructor () {
        this.app = express()
        // support application/json type post data
        this.app.use(express.json())
        // support application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false }))   
              
        this.appRoutes = new Routes()
        this.appRoutes.routes(this.app)
    }

}