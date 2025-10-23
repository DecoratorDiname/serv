import {Router} from 'express'
import clientRouter from './clientRouter.js'
import orderRouter from './orderRouter.js'
import orderItemRouter from './orderItemsRouter.js'
import productRouter from './productRouter.js'


const route = new Router()
route.use('/clients',clientRouter)
route.use('/orders',orderRouter)
route.use('/orderitems', orderItemRouter)
route.use('/products', productRouter)

export default route