import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';


//主要是实现的实体，是module的组件
@Injectable()
export class AppService {

  getHello(): string {
    var config = {
      database: 'postgres', // 使用哪个数据库
      username: 'postgres', // 用户名
      password: '438307', // 口令
      host: 'localhost', // 主机名
      port: 8080 // 端口号，MySQL默认3306
    }

    const Sequelize = require('sequelize');
    const sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        }
      });

    sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
        var DataTypes = require('sequelize/lib/data-types');
        const UserModel = sequelize.define('t_users', {
          firstName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: true // default: true
          }
        }, {
          freezeTableName: true // table name auto freeze
        });
        
        (async ()=> {
          await UserModel.sync({force: true}) // force:true => delete it if exists
        })()
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err);
    });

    return 'Hello World!';
  }
}
