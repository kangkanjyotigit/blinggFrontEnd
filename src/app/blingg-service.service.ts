import { Injectable } from '@angular/core';
import {HttpClient,HttpInterceptor} from '@angular/common/http';
import {IbannerValue} from './bannerValue';

@Injectable({
  providedIn: 'root'
})
export class BlinggServiceService implements HttpInterceptor{

  constructor(private http:HttpClient) { }
  
  intercept(req, next){
    let tokenizedReq =req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
  
  public bannerDetails =[];
  public currentClick ;
  getBannerDetails():any{
    return new Promise((resolve,reject)=>{
    this.http.get('http://localhost:4000/').subscribe(data=>{
      this.bannerDetails = data as IbannerValue[];
      resolve(this.bannerDetails);
    })})
  }

  addingNewBanner(data){
    this.http.post('http://localhost:4000/addNew',data).subscribe(
       );
  }
  getToken(){

  }

  determineCurrentClick(data){
    console.log('printing current'+ data);
    this.currentClick = data;
  }
  gettingCurrentClick(){
    return this.currentClick;
  }
  
  sendDataDatabase(data){
    console.log('printing from service'+ data.name);
    return this.http.post('http://localhost:4000/DataPost',data);
  }
  

}
