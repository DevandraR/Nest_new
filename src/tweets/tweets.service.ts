import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from './tweets.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectRepository(Tweet)
    private userRepository: Repository<Tweet>,
  ) {}

  findAll(): Promise<Tweet[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Tweet> {
    return this.userRepository.findOne({ where: { id } });
  }

  create(user: Tweet): Promise<Tweet> {
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  // tambahkan untuk fungsi mencari tweets berdasarkan user
}
