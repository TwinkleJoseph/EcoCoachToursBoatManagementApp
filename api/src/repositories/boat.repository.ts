import { EntityManager, EntityRepository } from "typeorm";
import { Boat } from "../entities/boat";

const logger = require('../logger/logging')


@EntityRepository(Boat)
export class BoatRepository {
    

    constructor (private manager: EntityManager){

    }

    public async createOrUpdateBoat (reqBoat: Boat) {
      logger.info('BoatRepository.createBoat() start')
      const Boat = await this.manager.save(reqBoat)
      return Boat
    }

    public async findAllBoats () {
      logger.info('BoatRepository.findAllBoats() method')
      const boats = await this.manager.find(Boat)
      logger.info('BoatRepository.findAllBoats() end')
      return boats
    }

    public async findByBoatId (boatId:string) {
      logger.info('BoatRepository.findByBoatId() method')
      const boat = await this.manager.findOne(Boat, { id:boatId })
      logger.info('BoatRepository.findByBoatId() end')
      return boat
    }

    public async findByStatus (status:string) {
      logger.info('BoatRepository.findByStatus() method')
      logger.info('status in repo ',status)

      const Boats = await this.manager.createQueryBuilder(Boat, 'Boat')
        .where('Boat.status = :status', { status: status })
        .getMany() 
      logger.info('BoatRepository.findByStatus() end')
      logger.info('Boats from repo',Boats)
      return Boats
    }

    public async deleteByBoatId(boatId: string) {
      logger.info('BoatRepository.deleteByBoatId() method')
      const boat = await this.manager.delete(Boat, { id:boatId })
      logger.info('BoatRepository.deleteByBoatId() end')
      return boat
    }
   

}