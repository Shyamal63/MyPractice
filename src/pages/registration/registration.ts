import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  email:any;
  password:any;
  name:any;
  username:any


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  registration(){
    alert("you have registered successfully");

firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
.then(newUser =>{

  console.log(newUser);
  console.log(newUser.uid);
  firebase.database().ref('/userProfile/').child(newUser.uid).set({
    name:this.name,
    email:this.email,
    // password:this.password,
    userType:"user",
    username:this.username,
  });
  console.log(newUser.uid);
})
this.navCtrl.setRoot(LoginPage);
  }

}
