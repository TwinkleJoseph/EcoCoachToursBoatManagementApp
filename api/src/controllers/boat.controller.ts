/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { Constants } from "../common/app.constants";
import { BoatServices } from "../services/boat.service";
import { connection } from '../connections/db'
import { ErrorHandler } from "../common/error";
import { Boat } from "../entities/boat";

const logger = require('../logger/logging')

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class BoatController {

    /**
     * Function to create add a new Boatto the swim lane
     * @param req 
     * @param res 
     */
    public createBoat(req: Request, res: Response) {
      logger.info('BoatController.createBoat() method')
      const boatServices:BoatServices = new BoatServices()
      const errorHandler:ErrorHandler = new ErrorHandler()
      let userDefinedMessage
      connection
        .then(async () => {

          const newBoat = await boatServices.createOrUpdateBoat(mapRequestToEntity(null,req.body))
          if (newBoat !== null && typeof (newBoat) !== Constants.UNDEFINED) {
            res.status(Constants.OK)
              .json({
                message: Constants.SUCCESSFULLY_CREATED_MESSAGE,
                boat: newBoat
              })
          } else {
            userDefinedMessage = Constants.INVALID_DATA
            errorHandler.handleValidationError(res, Constants.CREATE_BOAT_METHOD_NAME, userDefinedMessage, Constants.NOT_FOUND, Constants.CREATE_BOAT_METHOD_NAME)
          }
          logger.info('Response from BOATController.createBOAT() is', res.statusCode)
        })
        .catch(error => {
          errorHandler.handleExceptionError(res, Constants.CREATE_BOAT_METHOD_NAME, (error as Error).message, Constants.INTERNAL_SERVER_ERROR, Constants.INTERNAL_SERVER_EXCEPTION, error)
          logger.error('Exception occured in BOATController.createBOAT() method ', JSON.stringify(error))
        })
    }

    /**
     * Function to get the card details all Boats
     * @param req 
     * @param res 
     */
    public findAllBoats (req: Request, res: Response) {
      logger.info('BoatController.findAllBoats() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public findBoatById (req: Request, res: Response){
      logger.info('BoatController.findBoatById() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public findBoatsByStatus (req: Request, res: Response){
      logger.info('BoatController.findBoatsByStatus() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public updateBoat(req: Request, res: Response){
      logger.info('BoatController.updateBoat() method')
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public deleteBoat(req: Request, res: Response){
      logger.info('BoatController.deleteBoat() method')
    }
}

/**
 * Method to map the request entity to db entity for persistence.
 * Typeorm will throw run time error if request object is send
 * directly to database.
 * @param truck 
 * @param reqTruck 
 * @returns 
 */
function mapRequestToEntity(boat:Boat, reqBoat: Boat): Boat {
  if(boat == null || typeof (boat) === Constants.UNDEFINED){
    boat = new Boat()
  }

  boat.registrationNumber = reqBoat.registrationNumber
  boat.vesselName = reqBoat.vesselName
  boat.portOfRegistration = reqBoat.portOfRegistration
  boat.guideId = reqBoat.guideId
  boat.status = reqBoat.status
  return boat

}

