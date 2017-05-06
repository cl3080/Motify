import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { TrendComponent } from './trend/trend.component';
import { SearchComponent } from './search/search.component';
import {ProfileComponent} from "./profile/profile.component";

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'trend', component: TrendComponent },
      { path: 'search', component: SearchComponent },
      { path: 'profile', component: ProfileComponent}
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
