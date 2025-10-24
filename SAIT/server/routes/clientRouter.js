import {Router} from 'express'
import {getClients} from '../controlers/clientControler.js'
import {createClients} from '../controlers/clientControler.js'
import {getOneClient} from '../controlers/clientControler.js'
import {deleteClient} from '../controlers/clientControler.js'
const clientRouter = new Router()
clientRouter.get('/', getClients )
clientRouter.post('/', createClients)
clientRouter.get('/:id', getOneClient)
clientRouter.delete('/:id',deleteClient)

export default clientRouter