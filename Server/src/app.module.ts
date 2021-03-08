import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserController } from './cats/user/user.controller';
@Module({
  imports: [CatsModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
