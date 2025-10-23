import {Router} from 'express'
import {getOrderItem} from '../controlers/orderItemsControler.js'
import {postOrderItem} from '../controlers/orderItemsControler.js'

const orderItemRouter = new Router()
orderItemRouter.get('/getorderitems', getOrderItem )
orderItemRouter.post('/postorderitems',postOrderItem)
export default orderItemRouter