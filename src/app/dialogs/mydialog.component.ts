import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';


@Component({
  selector: 'mydialogexample',
  templateUrl: './mydialogexample.html',
})
export class MyDialogExample {  
  public htmUrl;
  constructor(public dialogRef: MdDialogRef<MyDialogExample>) {}
}