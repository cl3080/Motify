import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user"
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {

  user : User;
  isLoggingIn = true;

  constructor(private router: Router, private userService :UserService, private page : Page) {
    this.user = new User();
    this.user.email = "motify@motify.com";
    this.user.password = "password";
  }

  ngOnInit(){
    this.page.actionBarHidden = true;
    this.page.backgroundImage="res://bg_login";
  }

  submit(){
    if(this.isLoggingIn){
      this.login();
    }
    else{
      this.signUp();
    }
  }
  login(){
    this.userService.login(this.user)
    .subscribe(
      ()=> this.router.navigate(["/list"]),
      (error) => alert("Error:" + error)
    )
  }

  signUp(){
    this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      (error)=> alert("Unfortunately, We were unable to create your account with Error:\n"+error)
    );
    //.subscribe ()=>Success Condition, fail Condition
  }
  toggleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
  }
}