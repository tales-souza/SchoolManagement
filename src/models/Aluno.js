import { Sequelize, Model } from 'sequelize';


export default class Aluno extends Model {

  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
      }
    },
      {
        sequelize,
        tableName: 'alunos'

      });

    return this;
  }
}
