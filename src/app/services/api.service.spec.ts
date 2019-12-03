import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientMock } from '../_mock-backend';
import { HttpClient } from '@angular/common/http';
import { Api } from '../model';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      { provide: HttpClient, useClass: HttpClientMock },
    ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('get should work', (done) => {
    const service: ApiService = TestBed.get(ApiService);
    service.get(Api.Users).subscribe((res) => {
      expect(res.length).toBeGreaterThan(0);
      done();
    });
  });

});
