import Sequelize from 'sequelize';
import databaseConfig from '../config/database.json'
import Aluno from '../models/Aluno'
import User from '../models/User'
import dotenv from 'dotenv';
dotenv.config()
const models = [Aluno, User];

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect:process.env.DATABASE_DIALECT
});


models.forEach((model)=>model.init(sequelize));
