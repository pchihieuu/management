
import { DataSource } from 'typeorm';
import { StoreOwner } from '../entities/store-owner.entity';
import { Store } from '../entities/store.entity';
import { Freelancer } from '../entities/freelancer.entity';
import { Contract } from '../entities/contract.entity';
import { JobRequest } from '../entities/job-request.entity';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'store_management',
  synchronize: true,
  logging: true,
  entities: [StoreOwner, Store, Freelancer, Contract, JobRequest],
  subscribers: [],
  migrations: [],
  
  
});