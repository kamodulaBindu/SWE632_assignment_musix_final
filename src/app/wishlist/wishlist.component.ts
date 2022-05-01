import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { AllTracks } from '../track';
import { TrackListComponent } from '../track-list/track-list.component';
import { SearchTracksComponent } from '../search-tracks/search-tracks.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
 wishList = JSON.parse(localStorage.getItem("wishList"));
  // wishList = [];
  // iterableDiffer: any;
  constructor() {
    // this.iterableDiffer = iterableDiffers.find([]).create(null);
}
  // ngDoCheck(){
  //   let changes = this.iterableDiffer.diff(this.wishList);
  //   if (changes) {
  //       console.log('Changes detected!');
  //   }
  // }
  ngOnInit(){
   this.getWhishList();
  //  window.location.reload();
  }

  getWhishList(){
    
    console.log("kdhfdgf"+this.wishList);
    console.log("wishlisttt"+localStorage.getItem("wishList"));
  }
  checkWhishlist(trackName : string){
    const whishListName = [];
    if(this.wishList){
   for(let i=0;i<this.wishList.length;i++){
    //  console.log(this.wishList[i].name);
     whishListName.push(this.wishList[i].name);
   }
     if(whishListName.includes(trackName)){
       return true;
     }else{
       return false;
     }
    }
   }

   removeTrack(track: { listeners: any; name: any; artist: { name: any; }; duration: any; }): any {
    let musix={
      id:track.listeners,
      name:track.name,
      artist: track.artist.name,
      duration: track.duration
 
    }
    const whishListName = [];
    let index = 0;
    if(this.wishList){
   for(let i = 0;i<this.wishList.length;i++){
     console.log(i +"  wishlistNAme "+ this.wishList[i].name +" misixName " + musix.name+"lololllll");
    if((this.wishList[i].name) == ( musix.name)){
      console.log(i);
      index = i;
    }
    
   }
  //  console.log("index"+index);
   this.wishList.splice(index,1);
   localStorage.setItem("wishList", JSON.stringify(this.wishList));
   let whishListeds = new WishlistComponent();
   whishListeds.ngOnInit();
   console.log(this.wishList);
  }
  
    }

}
