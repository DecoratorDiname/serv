import models from '../models/models.js'

const {Client} = models



export const getClients = async(req,res,next) =>
{
    try 
    {
        
        const getclients = await Client.findAll()
        res.status(200).json(getclients)
    }
    catch(err)
    {
        next(err)
    }
}

export const createClients = async(req,res,next) =>
{
    try 
    {
        const {name,rating,age} = req.body;
        const newClient = await Client.create({name,rating,age})
        res.status(201).json({message: 'Добавлено'})
    }
    catch(err)
    {
        next(err)
    }
}
export const getOneClient = async(req,res,next) =>
{
    try 
    {
        const {id} = req.params;
        const oneClient = await Client.findOne({where: {id}})
        res.status(200).json(oneClient)
    }
    catch(err)
    {
        next(err)
    }
}
export const deleteClient = async(req,res,next) =>
{
    try 
    {
        const {id} = req.params;
        const deleted = await Client.destroy({where: {id}})
        res.status(203).json({message: 'deleted'})
    }
    catch(err)
    {
        next(err)
    }
}