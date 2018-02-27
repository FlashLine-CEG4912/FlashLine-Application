
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { InstitutionsPage } from '../institutions/institutions';
import { SearchPage } from '../search/search';
import { NotificationsPage } from '../notifications/notifications';



@Component({
  selector: 'page-tabs',
  template:`<ion-tabs color="primary">
  <ion-tab [root]="institutionsPage" tabTitle="Home" tabIcon="home"></ion-tab>
  <ion-tab [root]="searchPage" tabTitle="search" tabIcon="search"></ion-tab>
  <ion-tab [root]="notificationsPage" tabTitle="notifications" tabIcon="notifications"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {

  institutionsPage = InstitutionsPage;
  searchPage = SearchPage;
  notificationsPage = NotificationsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
