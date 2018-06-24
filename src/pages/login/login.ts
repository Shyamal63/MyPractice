import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase';
import { HomePage } from '../home/home';
import { RegistrationPage } from '../registration/registration';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    
    if(this.email=="" || this.email==undefined){
      alert("provide a valid email id");
      }else if(this.password=="" || this.password==undefined){
        alert("password is mandatory");
      }else if(this.password.length<6){
        alert("password should be more than 6 characters");
      }
      else{

        firebase.auth().signInWithEmailAndPassword(this.email,this.password)
        .then(user =>{
          if(user){
            alert("signin successful");
         console.log(user);
          }
          else{
            alert("unsuccessful");
          }
        })

        // this.navCtrl.push(HomePage,{'emailId':this.email});
      }
   


    
  }
  redirectRegister(){
    this.navCtrl.push(RegistrationPage);
  }

}
