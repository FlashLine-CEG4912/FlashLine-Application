import { InstitutionsPage } from './../institutions/institutions';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
  
})
export class ServicePage implements OnInit {

  item:{id:String, name: String, minNum: String; maxNum: String};
  bookedTicket: any;
  bookedHour:number;
  bookMin:number;
  servedNum:number;
  chartime: String;
  numdiff: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, ) {
  this.bookedTicket = this.navParams.get('randomTicket');
  this.bookedHour = this.navParams.get('randomHour');
  this.bookMin = this.navParams.get('randomMin');
  this.servedNum = this.navParams.get('lowNum');
  this.chartime = this.navParams.get('randomChar');
  this.numdiff = this.bookedTicket - this.servedNum;
  this.item = this.navParams.get('item');
  
  
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
    console.log(this.bookedTicket)
  }

  ngOnInit(){
    
        this.item = this.navParams.data
      }

    onCancel(){

      const alert = this.alertCtrl.create({
        title: 'Cancel Ticket',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to cancel the ticket',
        buttons: [
          {
            text: 'Yes, go ahead',
            handler: () => {
              this.navCtrl.push(InstitutionsPage);
            }
          },
          {
            text: 'No, I changed my mind!',
            role: 'cancel',
            handler: () => {
              console.log('Cancelled!');
            }
          }
        ]
      });
  
      alert.present();
    
    }

}
