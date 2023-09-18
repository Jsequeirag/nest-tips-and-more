import { Body, Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { taskDto } from './task.dto';
import { Console } from 'console';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'title 1',
      description: 'description',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTask(taskDto: taskDto) {
    this.tasks.push({
      id: (this.tasks.length + 1).toString(),
      title: taskDto.title,
      description: taskDto.description,
      status: TaskStatus.PENDING,
    });
    return 'Guardado';
  }
  updateTask(id: string, taskDto: taskDto) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) return { ...taskDto, id };
      return task;
    });
    this.tasks.map((value) => {
      console.log(value);
    });
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return `id:${id}  deleted`;
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
