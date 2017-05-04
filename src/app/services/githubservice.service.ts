import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubserviceService {

  constructor(private http: Http) { }

  getRepositories(userName:String) {
    return this.http.get('https://api.github.com/users/'+userName+'/repos')
      .map(res => res.json()).catch(this.showError);
  }

  getListOfFiles(userName:String, repoName:String) {
    return this.http.get('https://api.github.com/repos/'+userName+repoName+'/contents')
      .map(res => res.json()).catch(this.showError);
  }

  private showError(error:Response){
    return error.json();
  }

}
