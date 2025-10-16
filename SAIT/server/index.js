// require('dotenv').config() - common JS
// import { Model } from 'sequelize' - ???

// common js
// const express = require('express');
// const {router} = require('express');
// module.exports = myfunc; / = {class1, class2};
// exports.myfunc =()=> {};

// ESm
// import express from 'express';
// import {Router} from 'express';
// import * as models from './models';

// export default myClass
// export {clas1, class2}
// export const myfunc = () => {};
import 'dotenv/config'; // ES modules
import sequelize from './db.js'
import models from './models/models.js'
import express from 'express'
import { Sequelize } from 'sequelize'
import cors from 'cors'
import router from './routes/router.js'



const app = express();
const PORT = process.env.PORT; 

app.use(cors())
app.use(express.json())
app.use('/api',router)
// app.get('/',(req,res)=>
//     {
//         res.status(200).json(
//             {
//                 message: 'work!'
//             })
//     })



const start = async() => {
    try{
        app.listen(PORT, () => {console.log(`Сервер работает на порту ${PORT}`)});
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Успешное подключение к БД');
    }
    catch (error) { console.log('Не удалось подключиться к БД',error);}

}

start();

