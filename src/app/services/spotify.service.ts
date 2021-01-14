import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

   }


getQuery(query:string){
  const url = `https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization':'Bearer BQCkA6eBTw2ihRTcuZ59O-W75byivofF-jEmCrFOSQsX4xPG9CoCy_l09Surl6TaM38USIQyaDz_-8O_d2A'
  });
  return this.http.get(url, {headers});
}   

getNewReleases(){
  return this.getQuery('browse/new-releases?limit=20').
  pipe( map(data=> data['albums'].items ));
}

getArtistas(termino:string){
  return this.getQuery(`search?q=${termino}%20&type=artist&limit=15`).
  pipe( map(data => data['artists'].items ));
  // const headers = new HttpHeaders({
  //   'Authorization':'Bearer BQCLzRXE0OyFcIs1C9JbePqhThBzb_9v_NgjCG2kMCgQRsdSgfoK-F9dvHNVlPaQEXxKg7jei-6oT63yZvI'
  // });
  // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}%20&type=artist&limit=15`, {headers})
  // .pipe( map(data=>{
  //   return data['artists'].items;
  // }));
}

getArtista(id:string){
  return this.getQuery(`artists/${id}`);
  // pipe( map(data => data['artists'].items ));
}

getTopTracks(id:string){
  return this.getQuery(`artists/${id}/top-tracks?country=us`).
  pipe( map(data => data['tracks']));

}


}
