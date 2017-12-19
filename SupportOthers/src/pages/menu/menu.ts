import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

import { NewDonation } from '../new-donation/registration';
import { NewRequest } from '../new-request/new-request';

/**
 * Generated class for the Menu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
  rootPage=TabsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  addDonations(){
    console.log('add donations called');
    this.navCtrl.push(NewDonation);
  }
  addNeeds(){
    console.log('add needs called');
    this.navCtrl.push(NewRequest);
  }
}
