import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { RegistrationPageModule } from '../pages/registration/registration.module';

import *as firebase from 'firebase';
import { LoginPageModule } from '../pages/login/login.module';
import { FilterPageModule } from '../pages/filter/filter.module';

var config = {
  apiKey: "AIzaSyA7JYC3lM1QFWb_KfH5ROIbk69ByScZ0Lg",
  authDomain: "practiceapp-31da9.firebaseapp.com",
  databaseURL: "https://practiceapp-31da9.firebaseio.com",
  projectId: "practiceapp-31da9",
  storageBucket: "",
  messagingSenderId: "665835322244"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    RegistrationPageModule,
    FilterPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
