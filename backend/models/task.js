import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Task = sequelize.define('Task', {
  username: DataTypes.STRING,
  priority: DataTypes.INTEGER,
  description: DataTypes.STRING
});