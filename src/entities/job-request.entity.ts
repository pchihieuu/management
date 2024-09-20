import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Store } from './store.entity';
  import { Freelancer } from './freelancer.entity';
  
  @Entity()
  export class JobRequest {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Store, (store) => store)
    store: Store;
  
    @ManyToOne(() => Freelancer, (freelancer) => freelancer.jobRequests)
    freelancer: Freelancer;
  
    @Column({ type: 'enum', enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' })
    status: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  