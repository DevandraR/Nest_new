import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Tweet } from './tweets.entity';

@Entity()
export class Reply {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    username: string;

    @Column()
    date: string;

    @Column()
    likes: number;

    @Column()
    retweets: number;

    @Column()
    comments: number;

    @Column()
    image: string;

    @ManyToOne(() => Tweet, tweet => tweet.replies)
    originalTweet: Tweet;
}