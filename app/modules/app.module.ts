import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/platform";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrendComponent } from './trend/trend.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TrendComponent,
    SearchComponent,
      ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
