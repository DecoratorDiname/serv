import models from '../models/models.js'

const {Product} = models



export const getProducts = async(reg,res) =>
{
    try 
    {
        
        const getProducts = await Product.findAll()
        res.status(200).json(getProducts)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}
export const postProducts = async(reg,res) =>
{
    try 
    {
        
        const postProducts = await Product.create()
        res.status(200).json(postProducts)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}