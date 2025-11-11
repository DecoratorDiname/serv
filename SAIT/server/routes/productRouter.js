import {Router} from 'express'
import {getProducts, updateProduct, postProducts} from '../controlers/productControler.js'



const productRouter = new Router()
productRouter.get('/', getProducts )
productRouter.post('/',postProducts)
productRouter.put('/:id',updateProduct)
export default productRouter