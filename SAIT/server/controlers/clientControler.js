import models from '../models/models.js'

const {Client} = models



export const getClients = async(reg,res) =>
{
    try 
    {
        
        const getClients = await Client.findAll()
        res.status(200).json(getClients)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}

export const postClients = async(reg,res) =>
{
    try 
    {
        
        const postClients = await Client.create()
        res.status(200).json(postClients)
    }
    catch(error)
    {
        res.status(500).json({
            message: 'Ошибка при получении данных'
        })
    }
}
