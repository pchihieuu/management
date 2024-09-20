import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Contract } from './contract.entity';
  import { JobRequest } from './job-request.entity';
  
  @Entity()
  export class Freelancer {
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
  
    @Column({ type: 'enum', enum: ['Male', 'Female', 'Other'] })
    gender: string;
  
    @Column({ nullable: true })
    avatar: string;
  
    @Column()
    street: string;
  
    @Column()
    ward: string;
  
    @Column()
    district: string;
  
    @Column()
    city: string;
  
    @OneToMany(() => Contract, (contract) => contract.freelancer)
    contracts: Contract[];
  
    @OneToMany(() => JobRequest, (jobRequest) => jobRequest.freelancer)
    jobRequests: JobRequest[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  