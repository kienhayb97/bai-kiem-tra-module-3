import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Awesome} from './interface/awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeServiceService {
  constructor(private http: HttpClient) {
  }

  getAwesome(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>('http://localhost:3000/awesomes/');
  }

  awesomeCreate(awesome: Partial<Awesome>): Observable<Awesome> {
    return this.http.post<Awesome>('http://localhost:3000/awesomes/', awesome);
  }

  editAwesome(id: number, awesome: Partial<Awesome>): Observable<Awesome> {
    return this.http.put<Awesome>(`http://localhost:3000/awesomes/${id}`, awesome);
  }

  awesomeDetail(id: string): Observable<Awesome> {
    return this.http.get<Awesome>(`http://localhost:3000/awesomes/${id}`);
  }

  awesomeDelete(id: number): Observable<Awesome> {
    return this.http.delete<Awesome>(`http://localhost:3000/awesomes/${id}`);
  }
}

