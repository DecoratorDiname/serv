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

export const updateProduct = async(req,res,next) =>
{
    try
    {
        const {id} = req.params;
        const [updated] = await Product.update(req.body,{where:{id}});
        if(!updated) return res.status(404).json({message:'Not found'});
        const product = await Product.findByPk(id)
        res.json(product)
    }
    catch(error)
    {
        next(err)
    }
}