import {Router} from 'express'
import {getClients} from '../controlers/clientControler.js'
import {postClients} from '../controlers/clientControler.js'

const clientRouter = new Router()
clientRouter.get('/getclients', getClients )
clientRouter.post('/postclients', postClients)


export default clientRouter