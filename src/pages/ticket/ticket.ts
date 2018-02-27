import { Component } from '@angular/core';

import {  NavController, NavParams} from 'ionic-angular';
import { ServicePage } from '../service/service';
import { suborganization } from '../../data/database.interface';
import { TicketService } from '../services/ticketService';
;


@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
 
})
export class TicketPage {

  item:{id:String, name: String, minNum: String; maxNum: String};
  service = ServicePage;
  serviceArray=[]

  minimumNum:string;
  maximumNum: String;

  lowNum:number;
  highNum:number;

  public randomTicket: number;
  randomHour: number;
  randomMin:number;
  randomChar: String;
  checkMin: boolean;
  
  
  ticketnum : suborganization[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private ticketService: TicketService) {

    this.maximumNum = this.navParams.get('maxNum');
    this.minimumNum = this.navParams.get('minNum')
    this.lowNum = + this.minimumNum;
    this.highNum = + this.maximumNum;
    this.randomTicket =  Math.floor(Math.random() * ( this.highNum- this.lowNum)) + this.lowNum;
    this.randomHour =   Math.floor(Math.random() * ( 4-8)) + 8;
    this.randomMin = Math.floor(Math.random()*(60-0)+0);
    if((Math.floor(Math.random() * ( this.highNum- this.lowNum)) + this.lowNum>0.5) &&(this.randomHour>=7)){

      this.randomChar = "AM"
    }
    else if(this.randomHour<6){
      this.randomChar = "PM"
    }

 

    

  
  }

  ionViewWillEnter() {
    this.ticketnum = this.ticketService.getTicketNum();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  ngOnInit(){
    
        this.item = this.navParams.data
      }


  onReduce(){

    if(this.randomTicket>this.lowNum){
    this.randomTicket = this.randomTicket-1;
    this.randomMin = this.randomMin-5;
    if(this.randomMin <=0){

      this.randomHour= this.randomHour-1;
      this.randomMin = 55;
    }
  }
  else{

    console.log('number already booked')
  }


  /*

    this.toast.show(`Ticket is taken`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
    */
  


  }

  onIncrease(){

    
    if( (this.randomTicket>this.highNum )){
      console.log('booked all day')
    }
    else{

      this.randomTicket = this.randomTicket+1;
      if(this.randomMin>=55){

        this.randomMin = 0;
        this.randomHour = this.randomHour+1;
      }
      else{

        this.randomMin = this.randomMin+5;
      }
 

      }
      
    }
    
  
  
  

  onCheckMin(){

    if(this.randomMin<10){

      this.checkMin = true;
  
    }
    else{
      this.checkMin = false;
    }

    return this.checkMin;
  }

  getMyTicket(randomTicket,randomHour,randomMin, randomChar,lowNum, item){

    this.navCtrl.push(ServicePage,{'randomTicket':randomTicket, 'randomHour':randomHour, 'randomMin':randomMin,
     'randomChar':randomChar, 'lowNum':lowNum, 'item':item,
          })
    

    
   
  }

}
