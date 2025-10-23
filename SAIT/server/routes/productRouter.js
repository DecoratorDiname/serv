import {Router} from 'express'
import {getProducts} from '../controlers/productControler.js'
import {postProducts} from '../controlers/productControler.js'


const productRouter = new Router()
productRouter.get('/getproducts', getProducts )
productRouter.post('/postproducts',postProducts)
export default productRouter