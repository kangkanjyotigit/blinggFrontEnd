import { Component, OnInit } from '@angular/core';
import {BlinggServiceService} from '../blingg-service.service' 
import{ Router} from '@angular/router' 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bannerDetails =[];
  constructor(private blinggService: BlinggServiceService, private router:Router) { }

  ngOnInit(): void {
    this.gettingDetails();
  }
  async gettingDetails(){
    this.bannerDetails = await this.blinggService.getBannerDetails();
  }
  goToDetails(data){
    this.blinggService.determineCurrentClick(data);
    this.router.navigate(['/detail']);
  }
  goToDetailsCreation(){
    this.router.navigate(['/detailCreation']);
  }

}
