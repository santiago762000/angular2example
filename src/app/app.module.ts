import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { MyDialogExample } from './dialogs/mydialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDialogExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,MyDialogExample]
})
export class AppModule { }
