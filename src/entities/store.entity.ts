import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { StoreOwner } from './store-owner.entity';
  import { Contract } from './contract.entity';
  
  @Entity()
  export class Store {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 100 })
    name: string;
  
    @Column({ nullable: true })
    logo: string;
  
    @Column()
    street: string;
  
    @Column()
    ward: string;
  
    @Column()
    district: string;
  
    @Column()
    city: string;
  
    @Column({ unique: true })
    phoneNumber: string;
  
    @Column({ unique: true })
    email: string;
  
    @ManyToOne(() => StoreOwner, (owner) => owner.stores)
    owner: StoreOwner;
  
    @OneToMany(() => Contract, (contract) => contract.store)
    contracts: Contract[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  