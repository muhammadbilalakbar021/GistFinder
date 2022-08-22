import { Module } from '@nestjs/common';
import { ResponseService } from 'src/utils/response/response.service';
import { GistController } from './controller/gist.controller';
import { GistService } from './service/gist.service';

@Module({
  controllers: [GistController],
  providers: [GistService, ResponseService]
})
export class GistModule {}
