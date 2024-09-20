import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Store } from './store.entity';
  
  @Entity()
  export class StoreOwner {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 100 })
    fullName: string;
  
    @Column({ unique: true })
    phoneNumber: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column({ type: 'date' })
    birthDate: Date;
  
    @Column({ nullable: true })
    avatar: string;
  
    @Column({ type: 'enum', enum: ['Male', 'Female', 'Other'] })
    gender: string;
  
    @OneToMany(() => Store, (store) => store.owner)
    stores: Store[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  