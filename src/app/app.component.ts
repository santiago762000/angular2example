import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MyDialogExample } from './dialogs/mydialog.component';
import { MdSnackBar } from '@angular/material';
import { GithubserviceService } from './services/githubservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubserviceService]
})
export class AppComponent {
  constructor(public dialog: MdDialog,
    private myService: GithubserviceService,
    public snackBar: MdSnackBar) { }

  repository = { "name": "",path:"" };
  repoContents: Array<Repository> = [];
  selectedRepository: Repository = this.repoContents[3];//We can do this with a constructor too

  showName() {
    this.repoContents=[];
    //this.repository = { "name": "",path:"" };
    this.myService.getRepositories(this.repository.name).subscribe(posts => {
      posts.forEach((x)=>{
        this.repoContents.push({ "id": x.id, "name": x.name });
        
      });
    }, err => {
      this.showSnackBar("Not Found","Error");
    });
  }

  updatePath(path){
    this.repository.path+=path;
    alert(this.repository.path);
    this.showContents();
  }

  return(){
    this.repository.path=this.repository.path.substring(0, this.repository.path.lastIndexOf("/"));
    if(this.repository.path!=""){
      this.showName();
    }else{
      this.showContents();
    }
    
  }

  showContents(){
    this.repoContents=[];
    this.myService.getListOfFiles(this.repository.name,this.repository.path).subscribe(posts => {
      posts.forEach((x)=>{
        this.repoContents.push({ "id": x.id, "name": x.name });
      });
    }, err => {
      this.showSnackBar("There is an error getting the file list","Error");
    });
  }

  

  showSelectedOption() {
    alert("You selected1:" + this.selectedRepository.name);
  }

  showDialogData() {
    this.dialog.open(MyDialogExample);
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }



}

interface Repository {
  id: number;
  name: String;
}

