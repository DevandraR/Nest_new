import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweets.entity';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tweet])],
    controllers: [TweetsController],
    providers: [TweetsService],
})
export class TweetsModule {}