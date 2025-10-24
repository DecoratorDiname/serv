import models from '../models/models.js'

const {Order_Item} = models



export const getOrderItem = async(req,res,next) =>
{
    try 
    {
        
        const getOrderItem = await Order_Item.findAll()
        res.status(200).json(getOrderItem)
    }
    catch(error)
    {
        next(err)
    }
}
export const postOrderItem = async(req,res,next) =>
{
    try 
    {
        
        const postOrderItem = await Order_Item.create()
        res.status(200).json(postOrderItem)
    }
    catch(error)
    {
        next(err)
    }
}
