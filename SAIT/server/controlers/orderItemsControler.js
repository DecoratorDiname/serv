import models from '../models/models.js'

const {Order_Item} = models



export const getOrderItem = async(reg,res) =>
{
    try 
    {
        
        const getOrderItem = await Order_Item.findAll()
        res.status(200).json(getOrderItem)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}
export const postOrderItem = async(reg,res) =>
{
    try 
    {
        
        const postOrderItem = await Order_Item.create()
        res.status(200).json(postOrderItem)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}
