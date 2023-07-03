import { FactoryProvider } from '@nestjs/common';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TESTING } from '../constants';
import { IDBConfigAttributes } from './dbConfig.interface';
import { databaseConfig } from './database.config';
import { Sequelize } from 'sequelize-typescript';
import { Executive } from 'src/modules/executives/executive.entity';

export const databaseProviders: FactoryProvider[] = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TESTING:
          config = databaseConfig.testing;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Executive]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
