import { App } from './app'
import { Constants } from './common/app.constants'
import { connection } from './connections/db'

//Require module
require('dotenv').config()
const app = new App().app

const PORT = process.env.PORT

app.listen(PORT,()=> {
    console.log('listen port ',PORT);
})


connection.catch(error => {
    app.use(function (res: any) {
      return res.status(Constants.INTERNAL_SERVER_ERROR).json(error)
    })
})