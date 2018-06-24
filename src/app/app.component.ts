import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';
import { NgZone } from '@angular/core';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public ngZone:NgZone) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
firebase.auth().onAuthStateChanged((user)=>{
 if(user){
   this.ngZone.run(()=>{
     this.rootPage=HomePage
   })
 }
 else{
   this.ngZone.run(()=>{
     this.rootPage=LoginPage
   })
 }

})
    
  }
}
