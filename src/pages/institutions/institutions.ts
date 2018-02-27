import database from '../../data/database';
import { SubInstitutionsPage } from '../sub-institutions/sub-institutions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { suborganization } from '../../data/database.interface';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



@IonicPage()
@Component({
  selector: 'page-institutions',
  templateUrl: 'institutions.html',
})
export class InstitutionsPage implements OnInit {

  institutionList:{ organization: String, suborganization:suborganization[], Image:String}[];
  subInstitutions = SubInstitutionsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){

    this.institutionList = database;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstitutionsPage');
  }

}
