import { Optional } from '@nestjs/common';
import { TaskStatus } from './task.entity';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsIn,
  IsOptional,
} from 'class-validator';

export class taskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;
  @IsString()
  description: string;
  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.INPROGRESS, TaskStatus.PENDING])
  status: TaskStatus;
}
