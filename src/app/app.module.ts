import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//THIRD PARTY----------------------------------------------
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// COMPONETS ----------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
