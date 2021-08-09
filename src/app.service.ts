import { Injectable } from '@nestjs/common';
import { StatsD } from 'hot-shots';

const statsdClient = new StatsD({});

@Injectable()
export class AppService {
  getHello(): string {
    statsdClient.increment('test_metric', {'foo': 'bar'});
    return 'Hello World!';
  }
}
