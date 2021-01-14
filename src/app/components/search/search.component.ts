import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas:any[]=[];
  loading:boolean;
  
  constructor(private spotity:SpotifyService) { }

  ngOnInit(): void {
  }


  buscar(valor:string){
    this.loading = true;
    this.spotity.getArtistas(valor).subscribe(data=>{
     this.artistas = data;
     this.loading=false;
    });
    
  }

}
