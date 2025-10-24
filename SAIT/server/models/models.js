import sequelize from '../db.js';
import {DataTypes, DECIMAL, or} from 'sequelize';
// import { database } from 'pg/lib/defaults';

const Client = sequelize.define(
    'clients',
    {
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:
        {
            type: DataTypes.STRING(50),
            allowNull: false

        },
        rating:
        {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaulValue: 0
        },
        age:
        {
            type:DataTypes.DATE,
        },
        role:
        {
            type:DataTypes.STRING,
            allowNull: false,
            defaultValue:'user',
        }

    }
)
const Product = sequelize.define(
    'products',
    {
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:
        {
            type: DataTypes.STRING(50),
            allowNull: false

        },
        count:
        {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        price:{
            type: DataTypes.INTEGER
        }      
    }
)
const Order = sequelize.define(
    'orders',
    {
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        status:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_amount:
        {
            type: DataTypes.DECIMAL
        }
        

    }
)
const Order_Item = sequelize.define(
    'order_items',
    {
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        count:
        {
            type: DataTypes.INTEGER
        },
        price:
        {
            type: DataTypes.DECIMAL
        }

    }
)
Client.hasMany(Order)
Order.belongsTo(Client)

Order.hasMany(Order_Item)
Order_Item.belongsTo(Order)

Product.hasMany(Order_Item)
Order_Item.belongsTo(Product)


export default 
{
Client, Product, Order, Order_Item
}