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

  repository = { "name": "" };


  defaultRepositories: Array<Repository> = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Leaflet" },
    { "id": 3, "name": "bootstrap" },
    { "id": 4, "name": "jquery" }
  ];
  selectedRepository: Repository = this.defaultRepositories[3];//We can do this with a constructor too

  showName() {
    this.myService.getRepositories(this.repository.name).subscribe(posts => {
      alert(JSON.stringify(posts.login));
    }, err => {
      this.showSnackBar("Not Found","Error");
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

