/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { Constants } from "../common/app.constants";
import { connection } from '../connections/db'

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class BoatController {

    /**
     * Function to create add a new Boatto the swim lane
     * @param req 
     * @param res 
     */
    public createBoat(req: Request, res: Response) {
      console.log('BoatController.deleteBoat() method')
    }

    /**
     * Function to get the card details all Boats
     * @param req 
     * @param res 
     */
    public findAllBoats (req: Request, res: Response) {
      console.log('BoatController.findAllBoats() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public findBoatById (req: Request, res: Response){
      console.log('BoatController.findBoatById() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public findBoatsByStatus (req: Request, res: Response){
      console.log('BoatController.findBoatsByStatus() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public updateBoat(req: Request, res: Response){
      console.log('BoatController.updateBoat() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public deleteBoat(req: Request, res: Response){
      console.log('BoatController.deleteBoat() method')
    }

}
