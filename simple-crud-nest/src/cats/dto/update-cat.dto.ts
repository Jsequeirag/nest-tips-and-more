import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
//todos los campos son opcionales
export class UpdateCatDto extends PartialType(CreateCatDto) {}
