import { Module } from '@nestjs/common';
import { PrismaModule } from './infrastructure/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
