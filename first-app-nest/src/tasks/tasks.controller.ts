import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

import { taskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksServive: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksServive.getAllTasks();
  }
  @Post()
  createTask(@Body() tasksDto: taskDto) {
    console.log(tasksDto);
    return this.tasksServive.createTask(tasksDto);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksServive.deleteTask(id);
  }
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() taskDto: taskDto) {
    return this.tasksServive.updateTask(id, taskDto);
  }
  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.tasksServive.getTaskById(id);
  }
}
