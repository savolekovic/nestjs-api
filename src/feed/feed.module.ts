import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './controllers/feed.service';
import { FeedController } from './controllers/feed.controller';

@Module({
  controllers: [FeedController],
  providers: [FeedService]
})
export class FeedModule {}
