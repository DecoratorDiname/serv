// require('dotenv').config() - common JS
import 'dotenv/config' // ES modules
import sequelize from './db.js'
import models from './models/models.js'
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
import express from 'express';
import { Sequelize } from 'sequelize';
const app = express();
const PORT = process.env.PORT; 


const start = async() => {
    try{
        app.listen(PORT, () => {console.log(`Сервер работает на порту ${PORT}`)});
        await sequelize.authenticate();
        await sequelize.sync({alter: true});
        console.log('Успешное подключение к БД');
    }
    catch (error) { console.log('Не удалось подключиться к БД',error);}

}

start();

