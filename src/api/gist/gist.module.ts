import { Module } from '@nestjs/common';
import { GistController } from './controller/gist.controller';
import { GistService } from './service/gist.service';

@Module({
  controllers: [GistController],
  providers: [GistService]
})
export class GistModule {}
