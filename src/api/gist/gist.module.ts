import { Module } from '@nestjs/common';
import { ResponseService } from 'src/utils/response/response.service';
import { GistController } from './controller/gist.controller';
import { GistService } from './service/gist.service';
import { NestCrawlerModule } from 'nest-crawler';

@Module({
  imports: [
    NestCrawlerModule,
  ],
  controllers: [GistController],
  providers: [GistService, ResponseService]
})
export class GistModule {}
