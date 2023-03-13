import { Request, Response } from "express"
import { Constants } from "../common/app.constants";
import { BoatController } from "../controllers/boat.controller"

const log = require('../logger/logging')

export class Routes {

    private boatController: BoatController;

    constructor (){

        this.boatController = new BoatController()
    }

    public routes (app: any): void {
        log.info('Routes.routes() start')

        // This "health check" route can be used to verify if the server is up.
        app.route('/api/health').get((_req:Request, resp: Response) => {
            resp.status(Constants.OK).send({ message: 'Boat API started successfully!' })
        })

        // Operations for boat entity are defined here. Get all boat, Create new boat
        app.route('/api/boat').get(this.boatController.findAllBoats)
            .post(this.boatController.createBoat)            

        // Operations for a selected boat
        app.route('/api/boat/:id').get(this.boatController.findBoatById)
            .put(this.boatController.updateBoat)
            .delete(this.boatController.deleteBoat)

        // Search trucks with status
        app.route('/api/search').get(this.boatController.findBoatsByStatus)    

    }
}