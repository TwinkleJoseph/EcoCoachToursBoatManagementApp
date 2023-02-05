import { EntityManager, EntityRepository } from "typeorm";
import { Boat } from "../entities/boat";


@EntityRepository(Boat)
export class BoatRepository {
    

    constructor (private manager: EntityManager){

    }

    public async createOrUpdateBoat (reqBoat: Boat) {
       console.log('BoatRepository.createBoat() start')
        const Boat = await this.manager.save(reqBoat)
        return Boat
    }

    public async findAllBoats () {
        console.log('BoatRepository.findAllBoats() method')
        const Boats = await this.manager.find(Boat)
       console.log('BoatRepository.findAllBoats() end')
        return Boats
    }

    public async findByBoatId (boatId:string) {
        console.log('BoatRepository.findByBoatId() method')
        const boat = await this.manager.findOne(Boat, { id:boatId }
          )
       console.log('BoatRepository.findByBoatId() end')
        return boat
    }

    public async findByStatus (status:string) {
        console.log('BoatRepository.findByStatus() method')
        console.log('status in repo ',status)

        const Boats = await this.manager.createQueryBuilder(Boat, 'Boat')
        .where('Boat.status = :status', { status: status })
        .getMany() 
       console.log('BoatRepository.findByStatus() end')
        console.log('Boats from repo',Boats)
        return Boats
    }

    public async deleteByBoatId(boatId: string) {
        console.log('BoatRepository.deleteByBoatId() method')
        const boat = await this.manager.delete(Boat, { id:boatId }
          )
       console.log('BoatRepository.deleteByBoatId() end')
        return boat
    }
   

}