/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'supertest'
import { App } from '../app'
// import { RoutesConstants } from '../common/routes.constants'
import { connection } from '../connections/db'
import { EntityManager } from 'typeorm'
import { Boat } from '../entities/boat'

const fetch = require('node-fetch')
require('dotenv').config()
jest.mock('node-fetch')
let token:any

afterAll(async () => {
  const manager = new EntityManager(await connection)
  await manager.createQueryBuilder()
    .delete()
    .from(Boat)
    .where('id = :id', { id: '6c5454fd-fed4-11eb-8939-0242ac180020' })
    .execute()
})

const app = new App().app
const fakeBoatId = '6c5454fd-fed4-11eb-8939-0242ac180016'

describe('Test BoatController Controller', () => {
  it('Save BoatController details', async () => {
    const result = await request(app).post('/boat')
      .send({
        registrationNumber : '456667',
        vesselName: 'Santa Maria',
        portOfRegistration: 'Vancouver',
        guideId:'d2628224-020f-497a-86c9-5873a7d8697e',
        status: 'Maintenance'
      })
    expect(result.status).toBe(200)
    expect(result.body.message).toBe('Successfully Created.')
  })

  it('Save already existing boat details', async () => {
    const result = await request(app).post('/boat')
        .send({
            registrationNumber : '456667',
            vesselName: 'Santa Maria',
            portOfRegistration: 'Vancouver',
            guideId:'d2628224-020f-497a-86c9-5873a7d8697e',
            status: 'Maintenance'
          })
          
    expect(result.body.message).toBe('duplicate key value violates unique constraint "d2628224-020f-497a-86c9-5873a7d8697e"')
      })


  it('Updates boat details', async () => {
    const result = await request(app).put('/boat' + '/' + 'd2628224-020f-497a-86c9-5873a7d8697e')
    .send({
        registrationNumber : '456667',
        vesselName: 'Santa Maria',
        portOfRegistration: 'Vancouver',
        guideId:'d2628224-020f-497a-86c9-5873a7d8697e',
        status: 'Maintenance'
      })
    expect(result.status).toBe(200)
    expect(result.body.message).toBe('Successfully Updated.')
  })

  it('Updates advanced boat details that is not in database ', async () => {
    const result = await request(app).put('/boat' + '/' + fakeBoatId)
    .send({
        registrationNumber : '456668',
        vesselName: 'Santa Maria Boat',
        portOfRegistration: 'Victoria',
        guideId:'d2628224-020f-497a-86c9-5873a7d8697f',
        status: 'Maintenance'
      })

    expect(result.status).toBe(404)
    expect(result.body.message).toBe('boat details not found.')
  })

  it('Return boat details by id', async () => {
    const result = await request(app).get('/boat' + '/' + 'd2628224-020f-497a-86c9-5873a7d8697e')
      .send()
    expect(result.status).toBe(200)
  })

  it('Find boat details by id that is not in database', async () => {
    const result = await request(app).get('/boat' + '/' + 'd3628224-020f-497a-86c9-5873a7d8697e')
    .send()
    expect(result.status).toBe(404)
  })
})
function afterAll(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.')
}

