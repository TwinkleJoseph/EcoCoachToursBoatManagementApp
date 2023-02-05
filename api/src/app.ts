/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'

export class App {
    public app: express.Application
    constructor () {
        this.app = express()
        // support application/json type post data
        this.app.use(express.json())
        // support application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false }))   
    }

}