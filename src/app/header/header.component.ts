import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { FormControl } from "@angular/forms";
import { TracksService } from "../track.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  
  recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
  // this.recentSearches = [];
  tracks = [];
  searchSong:string;
  search = new FormControl();
  private searchTracks: Observable<any>;
  displayRecentSearches = false;

  constructor(private _trackService: TracksService, private router: Router) {}

  ngOnInit() {
    this.search.valueChanges.subscribe((value) =>
      this._trackService.getSearchTracks(value)
    );
    console.log(this.recentSearches);
  }

  searching() {
    this._trackService.getSearchTracks(this.search.value).subscribe((data) => {
      this.tracks = data;
    });
    if (this.search.value) {
      this.displayRecentSearches = false;
    }
    if (!this.search.value) {
      this.displayRecentSearches = true;
    }
  }

  searchNavigate() {
    if(!this.recentSearches){
    this.recentSearches = ['bts']
    localStorage.setItem("recentSearches", JSON.stringify(this.recentSearches));
    }
    if(this.recentSearches)
    this.recentSearches.push(this.search.value);
    localStorage.setItem("recentSearches", JSON.stringify(this.recentSearches));
    this.router.navigate(["search", this.search.value]);
  }

  setRecentSearches() {
    this.displayRecentSearches = true;
  }
  ClearFields() {
    this.searchSong = '';
    
}


  setRecentSearchesFalse() {
    console.log(this.search.value);
    // if(this.search.value)
    this.displayRecentSearches = false;
  }
}