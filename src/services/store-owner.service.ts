import { Repository } from 'typeorm';
import { StoreOwner } from '../entities/store-owner.entity';
import { AppDataSource } from '../config/ormconfig'; // Sửa đúng đường dẫn của bạn

interface CreateStoreOwnerDTO {
    fullName: string;
    phoneNumber: string;
    email: string;
    birthDate: Date;
    avatar?: string;
    gender: 'Male' | 'Female' | 'Other';
  }
  
export class StoreOwnerService {
  private storeOwnerRepository: Repository<StoreOwner>;

  constructor() {
    this.storeOwnerRepository = AppDataSource.getRepository(StoreOwner);
  }

  async createStoreOwner(data: CreateStoreOwnerDTO): Promise<StoreOwner> {
    const newOwner = this.storeOwnerRepository.create(data);
    return this.storeOwnerRepository.save(newOwner);
  }
  async findAllStoreOwners(): Promise<StoreOwner[]> {
    return this.storeOwnerRepository.find();
  }
  async findStoreOwnerById(id: string): Promise<StoreOwner | null> {
    return this.storeOwnerRepository.findOne({ where: { id } });
  }

}
