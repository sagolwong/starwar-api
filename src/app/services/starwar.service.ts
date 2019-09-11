import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from './../models/people';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarService {

  constructor(
    private http:HttpClient,
  ) { }
  loadPeople(page : number) : Observable<People>{
    let url = `https://swapi.co/api/people/?page=${page}`
    return this.http.get(url).pipe(
      map(data =>{
        return data['results']
      })
    )
  }

}
