import { Breed } from 'src/breeds/entities/breed.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//se crea automaticamente en la base de datos
@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;

  @ManyToOne(() => Breed, (breed) => breed.id, {
    // cascade: true,
    eager: true,
    nullable: false, // para que traiga las razas al hacer un findOne
  })
  breed: Breed;
  @DeleteDateColumn()
  deteledAt: Date;
}
