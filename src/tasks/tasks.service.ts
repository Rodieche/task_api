import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto } from 'src/dto/create-task-dto';
import { UpdateTaskDto } from 'src/dto/update-task-dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    this.taskModel.find();
  }

  async create(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }

  async update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task);
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
