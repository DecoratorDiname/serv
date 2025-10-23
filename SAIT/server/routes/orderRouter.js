import {Router} from 'express'
import {getOrders} from '../controlers/orderControler.js'
import {postOrders} from '../controlers/orderControler.js'
const orderRouter = new Router()
orderRouter.get('/getorders',getOrders)
orderRouter.post('/postorders',postOrders)
export default orderRouter