import { TicketPage } from '../ticket/ticket';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit {
  item:{id:String, name: String, minNum:String, maxNum:String};
  
  
  

  ticket = TicketPage;

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  console.log()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  ngOnInit(){
    
        this.item = this.navParams.data
      }
   

  

    
}
