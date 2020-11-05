import { Component, OnInit } from '@angular/core';
import {BlinggServiceService} from '../blingg-service.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  constructor(private BlinggService:BlinggServiceService) { }
public bannerList= [];
public current;
public currentName;
public currentDescription;
public currentUrl;

  ngOnInit(): void {
   this.gettingBannerDetails();
   this.current = this.BlinggService.gettingCurrentClick();    
  }
  async gettingBannerDetails(){
    this.bannerList = await this.BlinggService.getBannerDetails();
    this.currentName = this.bannerList[this.current].name;
    this.currentDescription = this.bannerList[this.current].description;
    this.currentUrl = this.bannerList[this.current].url;
  }


}
