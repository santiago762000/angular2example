import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';
import { MyDialogExample } from './dialogs/mydialog.component';
import {GithubserviceService} from './services/githubservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GithubserviceService]
})
export class AppComponent {
  constructor(public dialog: MdDialog,private myService:GithubserviceService) {}

  repository={"name":"Angular Simple Example"};
  
 
  defaultRepositories:Array<Repository>=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Leaflet"},
    {"id":3,"name":"bootstrap"},
    {"id":4,"name":"jquery"}
    ];
    selectedRepository:Repository=this.defaultRepositories[3];//We can do this with a constructor too
  
  showName(){
    this.myService.getRepositories().subscribe(posts=>{
      alert(JSON.stringify(posts));
  });
  }

  showSelectedOption(){
    alert("You selected:"+this.selectedRepository.name);
  }

  showDialogData(){
    this.dialog.open(MyDialogExample);
  }

  

}

interface Repository{
id:number;
name:String;
}

