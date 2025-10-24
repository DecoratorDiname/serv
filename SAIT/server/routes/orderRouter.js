import {Router} from 'express'
import {getOrders} from '../controlers/orderControler.js'
import {postOrders} from '../controlers/orderControler.js'
const orderRouter = new Router()
orderRouter.get('/',getOrders)
orderRouter.post('/',postOrders)
export default orderRouter