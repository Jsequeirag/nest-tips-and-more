import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
    @InjectRepository(Breed)
    private breedRepository: Repository<Breed>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    try {
      const breed = await this.breedRepository.findOneBy({
        name: createCatDto.breed,
      });
      const cat = this.catRepository.create({
        name: createCatDto.name,
        age: createCatDto.age,
        breed,
      });
      return await this.catRepository.save(cat);
    } catch (e) {
      return e.sqlMessage;
    }
  }

  async findAll() {
    return await this.catRepository.find();
  }

  findOne(id: number) {
    return this.catRepository.findBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    // return await this.catRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return await this.catRepository.softDelete({ id }); //se le pasa el id
    //return this.catRepository.softRemove(intance) se le pasa la instancia
  }
}
