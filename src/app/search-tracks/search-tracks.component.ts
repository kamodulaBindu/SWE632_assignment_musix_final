import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { TracksService } from '../track.service';
import { WishlistService } from '../wishlist.service';
import { Observable } from 'rxjs';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrls: ['./search-tracks.component.css']
})
export class SearchTracksComponent implements OnInit {
  wishList = JSON.parse(localStorage.getItem("wishList"));
  private searchString: string;
  private track;
   searchTracks;
  private trackname;
  constructor(private router: Router ,private route: ActivatedRoute, private _trackService: TracksService, private wishlistService:WishlistService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.searchString = param.get('name');
    });
    this._trackService.getSearchTracks(this.searchString).subscribe(searchTracks => {
      this.searchTracks = searchTracks
    });
  }
  createTrack(track): any {
    this.trackname=track.name;
    this.router.navigate(['/saveTrack'],track); 
  
  //   this.wishlistService.saveTrack(this.track)
  //       .subscribe( data => {
  //         alert("User created successfully.");
  //       });

  // };
  let musix={
    id:track.listeners,
    name:track.name,
    artist: track.artist
  }
  console.log(musix);
  if(!this.wishList){
    this.wishList = [{ id: "123", name: "book desc 1",artist:" ", duration:" " }]
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

