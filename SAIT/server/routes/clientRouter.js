import models from '../models/models.js'
import Router from 'express'

const clientRouter = new Router()

const {Client} = models

clientRouter.get('/list', async(req,res)=>
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
})

export default clientRouter