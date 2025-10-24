import models from '../models/models.js'

const {Product} = models



export const getProducts = async(req,res,next) =>
{
    try 
    {
        
        const getProducts = await Product.findAll()
        res.status(200).json(getProducts)
    }
    catch(error)
    {
        next(err)
    }
}
export const postProducts = async(req,res,next) =>
{
    try 
    {
        
        const postProducts = await Product.create()
        res.status(200).json(postProducts)
    }
    catch(error)
    {
        next(err)
    }
}