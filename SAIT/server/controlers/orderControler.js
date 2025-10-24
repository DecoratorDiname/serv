import models from '../models/models.js'
const {Order} = models

export const getOrders = async(req,res,next) =>
{
    try 
    {
        
        const getOrders = await Order.findAll()
        res.status(200).json(getOrders)
    }
    catch(error)
    {
        next(err)
    }
}

export const postOrders = async(req,res,next) =>
{
    try 
    {
        
        const postOrders = await Order.create()
        res.status(200).json(postOrders)
    }
    catch(error)
    {
        next(err)
    }
}