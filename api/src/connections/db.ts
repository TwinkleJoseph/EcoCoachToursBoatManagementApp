import { createConnection } from 'typeorm'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../ormconfig')

export const connection = createConnection(config)
  .catch(error => {
    console.log('error in db connection',error)
    throw error
  })