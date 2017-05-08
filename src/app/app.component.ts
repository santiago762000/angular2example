import { Component } from '@angular/core';
import { MdDialog,MdDialogRef } from '@angular/material';
import { MyDialogExample } from './dialogs/mydialog.component';
import { MdSnackBar } from '@angular/material';
import { GithubserviceService } from './services/githubservice.service';
import { LocalstorageService } from './services/localstorage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubserviceService,LocalstorageService]
})
export class AppComponent {
  constructor(public dialog: MdDialog,
    private myService: GithubserviceService,
    private localstorageService: LocalstorageService,
    public snackBar: MdSnackBar) { 
      this.favourites=this.localstorageService.getObjectsFromFavourites();

    }
  favourites:any[];
  username = "";
  navigationPath=[];
  filterOptions=[{name:"name",value:"name"},{name:"date",value:"pushed_at"}];
  selectedFilter=this.filterOptions[0];
  repoContents: Array<Repository> = [];
  selectedRepository: Repository = this.repoContents[3];//We can do this with a constructor too

  showName() {
    
    this.repoContents=[];
    this.navigationPath=[];
    this.navigationPath.push({pathLabel:"/",path:"/"});
    this.myService.getRepositories(this.username).subscribe(posts => {
        this.repoContents=posts;
    }, err => {
      this.showSnackBar("Not Found","Error");
    });
  }

  

  showContents(path){
    this.repoContents=[];
    this.myService.getListOfFiles(this.username,path).subscribe(posts => {
      posts.forEach((x)=>{
        this.repoContents.push(x);
      });
    }, err => {
      this.showSnackBar("There is an error getting the file list","Error");
    });
  }

  

  showSelectedOption() {
    alert("You selected1:" + this.selectedRepository.name);
  }

  showDialogData(repo) {
    //this.dialog.open(MyDialogExample);
    let dialogRef: MdDialogRef<MyDialogExample>;
    dialogRef = this.dialog.open(MyDialogExample);
    dialogRef.componentInstance.htmUrl = repo.html_url;
    
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addToFavourites(repo){
    this.localstorageService.addObjectToFavourites({name:repo.name,url:repo.html_url});
    this.favourites=this.localstorageService.getObjectsFromFavourites();
  }

  removeFromFavourites(index){
    //this.localstorageService.deleteFavourite(index);
    //this.favourites=this.localstorageService.getObjectsFromFavourites();
  }

  showSimpleMessage(name:string){
    alert("Hello "+name);
  }

}

interface Repository {
  id: number;
  name: String;
}

