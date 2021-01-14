// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  // constructor(private http:HttpClient) { 
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(data =>{
  //     console.log(data);
  //   })
  // }

  // data:any;
  // constructor(){
  //     this.getdata();
  // }

//  async getdata(){
//      this.data = await fetch('https://restcountries.eu/rest/v2/lang/es');
//      this.data = await this.data.json();
//       console.log(this.data);
//   }

nuevasCanciones:any[]=[];
loading:boolean;

constructor(private spotify:SpotifyService){
  this.loading = true;   
  this.spotify.getNewReleases().subscribe((data:any)=>{
    this.nuevasCanciones = data;
    this.loading=false;
  });
}

  ngOnInit(): void {
  }

}
