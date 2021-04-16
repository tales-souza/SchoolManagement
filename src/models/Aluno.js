import { Sequelize, Model } from 'sequelize';


export default class Aluno extends Model {

  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        validate: {
          len: {
            args: [3, 555],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        validate: {
          len: {
            args: [3, 555],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe'
        },
        validate: {
          isEmail: {
            msg: 'Email Inválido'
          }
        }
      },
      idade:{
        type: Sequelize.INTEGER,
        isInt: {
          msg: "campo idade precisa ser inteiro" 
        },
        allowNull: false
      } ,
      peso:{
        type: Sequelize.INTEGER,
        isFloat: {
          msg: "campo peso precisa ser numérico" 
        },
        allowNull: false
      },
      altura:{
        type: Sequelize.INTEGER,
        isFloat: {
          msg: "campo altura precisa ser numérico" 
        },
        allowNull: false
      },
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
