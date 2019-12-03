import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string, options: any = {}): Observable<any> {
    return this.httpClient.get(url, options).pipe(
      map((res: any) => res.data)
    );
  }

}
