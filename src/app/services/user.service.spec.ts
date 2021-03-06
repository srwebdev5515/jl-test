import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { HttpClientMock } from '../_mock-backend';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      { provide: HttpClient, useClass: HttpClientMock },
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('getUser should work', (done) => {
    const service: UserService = TestBed.get(UserService);
    service.getUsers().subscribe(res => {
      expect(res.length).toBeGreaterThan(0);
      done();
    });
  });

});
