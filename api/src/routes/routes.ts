import { Request, Response } from "express"
import { Constants } from "../common/app.constants";
import { BoatController } from "../controllers/boat.controller"

export class Routes {

    private boatController: BoatController;

    constructor (){

        this.boatController = new BoatController()
    }

    public routes (app: any): void {
        console.log('Routes.routes() start')

        // This "health check" route can be used to verify if the server is up.
        app.route('/health').get((_req:Request, resp: Response) => {
            resp.status(Constants.OK).send({ message: 'Boat API started successfully!' })
        })

        // Operations for boat entity are defined here. Get all boat, Create new boat
        app.route('/boat').get(this.boatController.findAllBoats)
            .post(this.boatController.createBoat)            

        // Operations for a selected boat
        app.route('/boat/:id').get(this.boatController.findBoatById)
            .put(this.boatController.updateBoat)
            .delete(this.boatController.deleteBoat)

    }
}