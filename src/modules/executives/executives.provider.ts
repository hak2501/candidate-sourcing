import { EXECUTIVES_MODEL } from 'src/core/constants';
import { Executive } from './executive.entity';

export const executivesProviders = [
  {
    provide: EXECUTIVES_MODEL,
    useValue: Executive,
  },
];
