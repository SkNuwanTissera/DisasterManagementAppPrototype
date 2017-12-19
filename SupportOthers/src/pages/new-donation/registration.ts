import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewDonation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-donation',
  templateUrl: 'registration.html',
})
export class NewDonation {
   form={
    name:'',
    tel:'',
    address:'',
    city:'',
    donation:'',
    extra:'',
    lng:'',
    lat:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewDonation');
  }

}
