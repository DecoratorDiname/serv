import models from '../models/models.js'
const {Order} = models

export const getOrders = async(reg,res) =>
{
    try 
    {
        
        const getOrders = await Order.findAll()
        res.status(200).json(getOrders)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}

export const postOrders = async(reg,res) =>
{
    try 
    {
        
        const postOrders = await Order.create()
        res.status(200).json(postOrders)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}