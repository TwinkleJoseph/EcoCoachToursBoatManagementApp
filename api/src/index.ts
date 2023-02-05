import { App } from './app'

//Require module
require('dotenv').config()
const app = new App().app

const PORT = process.env.PORT

app.listen(PORT,()=> {
    console.log('listen port ',PORT);
})
