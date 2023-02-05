import { getCustomRepository } from "typeorm";
import { Boat } from "../entities/boat";
import { BoatRepository } from "../repositories/boat.repository";

export class BoatServices {
  
 
  boatRepository: BoatRepository 

  constructor (){
    this.boatRepository = getCustomRepository(BoatRepository)
  }

  public async createOrUpdateBoat(reqBoat: Boat) {
    console.log('BoatServices.createBoat() method')
    return await this.boatRepository.createOrUpdateBoat(reqBoat)
  }

  public async findAllBoats() {
    console.log('BoatServices.findAllBoats() method')
    return await this.boatRepository.findAllBoats()
  }

  public async findByBoatId(boatId: string) {
    console.log('BoatServices.findByBoatId() method')
    return await this.boatRepository.findByBoatId(boatId)
  }

  public async findByStatus(status: string) {
    console.log('BoatServices.findByStatus() method')
    return await this.boatRepository.findByStatus(status)
  }

  public async deleteByBoatId(boatId: string) {
    console.log('BoatServices.deleteByBoatId() method')
    return await this.boatRepository.deleteByBoatId(boatId)
  }

}