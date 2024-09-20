import { Repository } from 'typeorm';
import { Store } from '../entities/store.entity';
import { AppDataSource } from '../config/ormconfig';

export class StoreService {
  private storeRepository: Repository<Store>;

  constructor() {
    this.storeRepository = AppDataSource.getRepository(Store);
  }

  async getAllStores(): Promise<Store[]> {
    return this.storeRepository.find();
  }

  
}
