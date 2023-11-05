import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto } from 'src/dto/create-task-dto';
import { UpdateTaskDto } from 'src/dto/update-task-dto';
import { DataSnapshot, get, push, ref, set } from 'firebase/database';
import { firebaseDataBase } from '../firebase.config';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findAll() {
    const dataRef = ref(firebaseDataBase, 'Tasks');
    const snapshot: DataSnapshot = await get(dataRef);
    const tasks = Object.values(snapshot.val());
    return tasks;
    //this.taskModel.find();
  }

  async create(task: CreateTaskDto) {
    //const newTask = new this.taskModel(task);
    //return newTask.save();
    const dataRef = ref(firebaseDataBase, 'Tasks');
    const newTaskRef = push(dataRef, { dataRef: task });
    const result = await set(newTaskRef, task);
    return result;
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }

  async update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
