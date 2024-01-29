// societes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocietesService {

  constructor(private http: HttpClient) { }

  getAllSocietes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/societes')
      .pipe(
        tap((data: any) => console.log('Data from API:', data)),
        catchError(error => {
          console.error('Error fetching data from API:', error);
          throw error;
        })
      );
  }

}
