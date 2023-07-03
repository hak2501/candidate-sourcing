import { EXECUTIVES_REPOSITORY } from 'src/core/constants';
import { Executive } from './executive.entity';

export const executivesProviders = [
  {
    provide: EXECUTIVES_REPOSITORY,
    useValue: Executive,
  },
];
