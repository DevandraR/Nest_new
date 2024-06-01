import { User } from 'src/user/user.entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { Reply } from './replies.entity';

@Entity()
export class Tweet {
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

    @ManyToOne(() => User, user => user.tweets)
    writer: User;

    @OneToMany(() => Reply, reply => reply.originalTweet)
    replies: Reply[];
}