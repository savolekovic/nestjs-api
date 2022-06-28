import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';

@Module({
  controllers: [FeedController],
  providers: [FeedService]
})
export class FeedModule {}
