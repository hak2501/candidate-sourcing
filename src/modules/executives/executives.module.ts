import { Module } from '@nestjs/common';
import { ExecutivesService } from './executives.service';
import { executivesProviders } from './executives.provider';

@Module({
  providers: [ExecutivesService, ...executivesProviders],
  exports: [ExecutivesService],
})
export class ExecutivesModule {}
