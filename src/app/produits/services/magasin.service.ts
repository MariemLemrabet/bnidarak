import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  
  constructor(private http: HttpClient) {}
  getallmagasin(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/materiaux');
  }


}
