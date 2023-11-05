import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rodieche:4211868aB@cluster0.l6uu3.mongodb.net/?retryWrites=true&w=majority',
    ),
    TasksModule,
    UsersModule,
  ],
  providers: [UsersService],
})
export class AppModule {}
