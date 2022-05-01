import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllTracks } from './track';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) {}

  private trackUrl = 'http://localhost:8080/api/v1';
  private saveUrl = 'http://localhost:8080/api/v1/track';

  wishList = JSON.parse(localStorage.getItem("wishList"));

  public getTracks() {
    return this.wishList;
  }
  
  public saveTrack(track) {
    return this.http.post<AllTracks>(this.saveUrl, track);
  }

}