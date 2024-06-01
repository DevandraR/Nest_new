import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweets.entity';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';
import { Reply } from './replies.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Tweet, Reply])],
    controllers: [TweetsController],
    providers: [TweetsService],
})
export class TweetsModule {}
