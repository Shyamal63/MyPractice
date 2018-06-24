import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import *as firebase from 'firebase'
import { NgZone } from '@angular/core';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { FilterPage } from '../filter/filter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restaurant:any
  logParam:any
  resArray:any
  response:any
  currentUser:any
  userData:any
  admin:boolean
  constructor(public navCtrl: NavController,private socialSharing: SocialSharing,public navParams: NavParams,public ngZone:NgZone,public modalCtrl: ModalController) {
    
    this.ngZone.run(()=>{
      this.currentUser=firebase.auth().currentUser
      console.log(this.currentUser);
    })
    
    

  // this.logParam=this.navParams.get('emailId');
  const personRef=firebase.database().ref('/restaurants/');
  personRef.on('value',resSnap =>{
    console.log("hi");
  console.log(resSnap.val());
  this.response=resSnap.val();
  console.log("hello");
})

const personReff=firebase.database().ref('/userProfile/' +this.currentUser.uid);
personReff.on('value',snapUserprofl=>{
  console.log(snapUserprofl.val());
  this.userData=snapUserprofl.val()
  if(this.userData.userType == 'admin'){
    this.admin=true
    // alert("welcome admin")
  }else if( this.userData.userType == 'user'){
    this.admin=false
  }
})
this.restaurant=[
 {name:'alibaba',place:'kolkata',category:'Non-veg',image:'assets/restaurant.jpg'} ,
 {name:'Lazez',place:'Mumbai',category:'Non-veg',image:'assets/restaurant.jpg'} ,
 {name:'Vurivoj',place:'Ahmedabad',category:'veg',image:'assets/restaurant.jpg'},
 {name:'Buddha Bites',place:'Bangalore',category:'veg',image:'assets/restaurant.jpg'},
]
  }

  clickHere(index){

   
    this.socialSharing.share(this.response[index].name + ', '+ this.response[index].place).then(success => {
      alert(success)
    }).catch((e) => {
      // Error!
      alert(e)
    });
  }

  
  clickModal() {
    const modal = this.modalCtrl.create(FilterPage);
    modal.onDidDismiss(data =>{
      console.log(data);
    })
    modal.present();
    
  }
  // clickHere(){
  //   alert("hii");
  //   firebase.database().ref('/restaurants/').set(this.restaurant);
  // }
  logOut(){
    firebase.auth().signOut();
  }

}
