import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ExecutivesModule } from './modules/executives/executives.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ExecutivesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
