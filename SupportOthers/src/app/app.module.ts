import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Menu } from '../pages/menu/menu';
import { Requests } from '../pages/requests/requests';
import { Donations } from '../pages/donations/donations';
import { Areas } from '../pages/areas/areas';
import { NewRequest } from '../pages/new-request/new-request';
import { NewDonation } from '../pages/new-donation/registration';
import { ViewDonation } from '../pages/view-donation/view-donation'
import { ViewRequest } from '../pages/view-request/view-request';

@NgModule({
  declarations: [
    MyApp,
    Menu,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Requests,
    Donations,
    Areas,
    NewDonation,
    NewRequest,
    ViewRequest,
    ViewDonation
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Menu,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Requests,
    Donations,
    Areas,
    NewDonation,
    NewRequest,
    ViewRequest,
    ViewDonation
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
