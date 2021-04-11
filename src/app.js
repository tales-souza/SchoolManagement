import express from 'express';
import dotenv from 'dotenv';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/TokenRoutes';

dotenv.config();
import './database/'

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  async middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/login/', tokenRoutes);

  }
}

export default new App().app;
