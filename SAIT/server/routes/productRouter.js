import {Router} from 'express'
import {getProducts} from '../controlers/productControler.js'
import {postProducts} from '../controlers/productControler.js'


const productRouter = new Router()
productRouter.get('/', getProducts )
productRouter.post('/',postProducts)
export default productRouter