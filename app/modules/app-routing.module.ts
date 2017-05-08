import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { TrendComponent } from './trend/trend.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { InitRecommComponent } from './initRecomm/initRecomm.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'initRecomm', component: InitRecommComponent},
      { path: 'home', component: HomeComponent},
      { path: 'trend', component: TrendComponent },
      { path: 'search', component: SearchComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
