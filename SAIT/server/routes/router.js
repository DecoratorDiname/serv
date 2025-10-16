import Router from 'express'
import clientRouter from './clientRouter.js'
const route = new Router()
route.use('/clients',clientRouter)
export default route