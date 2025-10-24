import {Router} from 'express'
import {getOrderItem} from '../controlers/orderItemsControler.js'
import {postOrderItem} from '../controlers/orderItemsControler.js'

const orderItemRouter = new Router()
orderItemRouter.get('/', getOrderItem )
orderItemRouter.post('/',postOrderItem)
export default orderItemRouter