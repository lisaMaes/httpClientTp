import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_BASE_URL: string = 'https://api.github.com/';
const API_USERS: string = 'users/';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {


  getUser(login:string) {

    return this.http.get(`${API_BASE_URL}${API_USERS}${login}`);
  }

  constructor(private http: HttpClient) { }
}
