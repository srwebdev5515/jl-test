import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Api, User } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService: ApiService
  ) { }

  getUsers(): Observable<User[]> {
    return this.apiService.get(Api.Users);
  }

}
