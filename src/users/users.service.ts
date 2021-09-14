import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from './user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

  addUser(payload: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    // TODO: payload validation
    return this.userRepo.save(this.userRepo.create(payload))
  }

  getUsers(): Promise<UserEntity[]> {
    return this.userRepo.find()
  }
}
