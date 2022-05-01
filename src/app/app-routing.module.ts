import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackListComponent } from './track-list/track-list.component';
import { SearchTracksComponent } from './search-tracks/search-tracks.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path: 'tracks', component: TrackListComponent},
  {path:'search/:name', component:SearchTracksComponent},
  {path:'saveTrack', component:TrackListComponent},
  {path:'removeTrack', component:TrackListComponent},
  {path:'removeTracks', component:TrackListComponent},
  {path:'saveTracks', component: TrackListComponent},
  {path:'', redirectTo:'/tracks',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
