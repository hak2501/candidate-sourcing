import { DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Executives', {
      firstName: {
        type: DataTypes.STRING(100),
        field: 'firstName',
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(100),
        field: 'lastName',
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(254),
        field: 'email',
        allowNull: false,
        unique: true,
      },
      passwordHash: {
        type: DataTypes.STRING(128),
        field: 'passwordHash',
        allowNull: false,
      },
      registeredAt: {
        type: DataTypes.DATE,
        field: 'registeredAt',
        defaultValue: DataTypes.NOW,
      },
      lastLogin: {
        type: DataTypes.DATE,
        field: 'lastLogin',
      },
      contact: {
        type: DataTypes.STRING(25),
        field: 'contact',
      },
      id: {
        type: DataTypes.STRING(254),
        field: 'id',
        primaryKey: true,
      },
      timezone: {
        type: DataTypes.STRING,
        field: 'timezone',
      },
      failedAttempts: {
        type: DataTypes.INTEGER,
        field: 'failedAttempts',
      },
      gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        field: 'gender',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Executives');
  },
};
