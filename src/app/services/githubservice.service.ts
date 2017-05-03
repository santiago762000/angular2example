import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubserviceService {

  constructor(private http: Http) { }

  getRepositories(name:String) {
    return this.http.get('https://api.github.com/users/'+name)
      .map(res => res.json()).catch(this.showError);
  }

  private showError(error:Response){
    return error.json();
  }

}
