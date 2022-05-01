import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TracksService } from '../track.service';
import { ChangeDetectionRef } from 'bootstrap';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { from } from 'rxjs';
import { error } from 'util';
import { WishlistService } from '../wishlist.service';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TrackListComponent implements OnInit {
  wishList = JSON.parse(localStorage.getItem("wishList"));
  public tracks = [];
   public trackList=[];
  public errorMsg: any;
   
  // private whishList: Whis
  // public start=0;
  // public end=7;
  constructor(private _trackService: TracksService) { }


  ngOnInit() {
    // this.getTracks();
    
     this._trackService.getTracks()
      .subscribe(data => this.tracks=data,
                  error => this.errorMsg = error);
                  let whishListed = new WishlistComponent();
    whishListed.ngOnInit();

  }
  // getTracks(){
  //   this._trackService.getTracks().subscribe(tracks=>{
  //     this.tracks=tracks,
  //     error => this.errorMsg = error
  //     this.pushSlides();
  //   });

  // }
  createTrack(track: { listeners: any; name: any; artist: { name: any; }; duration: any; }): any {
   
   let musix={
     id:track.listeners,
     name:track.name,
     artist: track.artist.name,
     duration: track.duration

   }

   
   if(!this.wishList){
    this.wishList = [{ id: "", name: "",artist:" ", duration:" " }]
   }
   this.wishList.push(musix);
   localStorage.setItem("wishList", JSON.stringify(this.wishList));
   let whishListed = new WishlistComponent();
   whishListed.ngOnInit();
  //  this.wishlists.getWhishList();
   console.log(this.wishList);
  //  this.wishlist.saveTrack(musix).subscribe(data =>{
      console.log(musix);
    // });
   
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
 
 
 


}
function index(index: any) {
  throw new Error('Function not implemented.');
}

