import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrendComponent } from './trend/trend.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared';
import { LoginComponent } from  './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { User } from './shared/user/user';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule,
      NativeScriptHttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TrendComponent,
    SearchComponent,
    ProfileComponent,
    LoginComponent,
      LogoutComponent
  ],
  bootstrap: [AppComponent],
    providers: [User]
    // bootstrap: [LoginComponent]
})
export class AppModule {

}
