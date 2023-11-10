import { Module } from '@nestjs/common';
import { PlugsModule } from './plugs/plugs.module';
@Module({
  imports: [ 
    PlugsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
