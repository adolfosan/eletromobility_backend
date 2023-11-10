import { Module } from '@nestjs/common';
import { providers } from './providers';

@Module({
    providers: providers
})
export class PlugsModule {}
