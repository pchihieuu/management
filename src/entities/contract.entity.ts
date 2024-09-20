import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
  } from 'typeorm';
  import { Store } from './store.entity';
  import { Freelancer } from './freelancer.entity';
  
  @Entity()
  export class Contract {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Store, (store) => store.contracts)
    store: Store;
  
    @ManyToOne(() => Freelancer, (freelancer) => freelancer.contracts)
    freelancer: Freelancer;
  
    @Column({ type: 'enum', enum: ['Active', 'Terminated'], default: 'Active' })
    status: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  