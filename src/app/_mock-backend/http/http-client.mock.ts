import { of } from 'rxjs';
import { Users } from '../db';
import * as _ from 'lodash';
import { TESTING_AUTH_KEY, Api } from '../../model';

enum RequestType {
  Success,
  Invalid
}

interface DBConnection {
  db: any;
  type: RequestType;
}

export class HttpClientMock {

  static router(url: string, options: any = {}): DBConnection {
    switch (url) {
      case Api.Users:
        return { db: Users, type: RequestType.Success };
    }
  }

  get(url: string, options) {
    let response = null;

    if (HttpClientMock.router(url, options).type === RequestType.Invalid) {
      response = { status: 404, statusText: 'Not Found' };
    } else if (HttpClientMock.router(url, options).type === RequestType.Success) {
      response = Object.assign({ status: 200, statusText: 'Success'}, { data: HttpClientMock.router(url).db });
    }

    return of(response);
  }

}
