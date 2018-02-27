import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DashboardPage } from '../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { suborganization } from '../../data/database.interface';

@IonicPage()
@Component({
  selector: 'page-sub-institutions',
  templateUrl: 'sub-institutions.html',
})
export class SubInstitutionsPage implements OnInit {

  institutionItem:{ organization: String, suborganization:suborganization[], Image:String};
  dashboard = DashboardPage;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad SubInstitutionsPage');
  }

  ngOnInit(){

    this.institutionItem = this.navParams.data
  }

}
