import {Router} from 'express'
import {getOrders, updateStatusOrder} from '../controlers/orderControler.js'
import {postOrders} from '../controlers/orderControler.js'
const orderRouter = new Router()
orderRouter.get('/',getOrders)
orderRouter.post('/',postOrders)
orderRouter.patch('/:id',updateStatusOrder)
export default orderRouter