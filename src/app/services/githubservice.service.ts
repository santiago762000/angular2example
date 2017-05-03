import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubserviceService {

  constructor(private http: Http) { }

  getRepositories() {
    return this.http.get('https://api.github.com/users/defunkt')
      .map(res => res.json())
  }

}
