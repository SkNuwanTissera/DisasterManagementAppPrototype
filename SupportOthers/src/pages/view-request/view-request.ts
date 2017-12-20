import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Areas } from '../areas/areas';

/**
 * Generated class for the ViewRequest page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-request',
  templateUrl: 'view-request.html',
})
export class ViewRequest {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRequest');
  }

  navigation(){

    this.navCtrl.push(Areas);

  }

}
