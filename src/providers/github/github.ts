import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {
  private baseUrl = 'https://api.github.com/users/';
  private token = '?access_token=<your_token_here>';

  constructor(public http: Http) {
    console.log('Hello GithubProvider Provider');
  }

  getProfile(username) {
    return this.http.get(`${this.baseUrl}${username}${this.token}`)
      .map(res => res.json());
  }

  getRepos(username) {
    return this.http.get(`${this.baseUrl}${username}/repos${this.token}`)
      .map(res => res.json());
  }

  getFollowers(username) {
    return this.http.get(`${this.baseUrl}${username}/followers${this.token}`)
      .map(res => res.json());
  }
}
