import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  welcome={
    img:'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1350/1350687-bigthumbnail.jpg',
    heading:'Welcome!!',
    Description:'This is an app designed to eliminate issues faced by users of ikman.lk. ' +
    'This doesnt have any business intentions.' +
    'Completely Dummy Application,' +
    'To improve the User Experience collected through survey.'
  }
  constructor(public navCtrl: NavController) {

  }

}
