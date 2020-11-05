import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { BlinggServiceService } from './blingg-service.service';
import { RouterModule } from '@angular/router';
import { DetailsCreationComponent } from './details-creation/details-creation.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    routingcomponent,
    DetailsCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [BlinggServiceService,{provide:HTTP_INTERCEPTORS,useClass: BlinggServiceService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
