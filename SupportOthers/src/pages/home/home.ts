import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequest } from '../view-request/view-request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  request_view(val){
    console.log('click');
    this.navCtrl.push(ViewRequest);
  }

}
