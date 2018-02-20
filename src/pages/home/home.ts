import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url = "http://api.apixu.com/v1/current.json?key=d05eb52e69c14c51a06162137182002&q=Lodz";
  weather:any;

  constructor(public navCtrl: NavController , private http: HttpClient ) {
    this.http.get(this.url).subscribe(data=>{
      this.weather = data;
      console.log(this.weather);
    });
  }




}
