import { Component, OnInit } from '@angular/core';
import {BlinggServiceService} from '../blingg-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-details-creation',
  templateUrl: './details-creation.component.html',
  styleUrls: ['./details-creation.component.scss']
})
export class DetailsCreationComponent implements OnInit {

bannerDetailsData ={name:null,description:null,url:null};  
  constructor(private blinggService:BlinggServiceService,private router:Router) { }

  ngOnInit(): void {
  }
registerBannerData(){
 this.blinggService.sendDataDatabase(this.bannerDetailsData).subscribe(
   res=>{
   this.router.navigate(['/home']);},
   err=>{
     console.log('Somethingwent wrong');
   }
 ); 
}
}
