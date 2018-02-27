import { TabsPage } from '../pages/tabs/tabs';
import { ServicePage } from '../pages/service/service';
import { TicketPage } from '../pages/ticket/ticket';
import { SubInstitutionsPage } from '../pages/sub-institutions/sub-institutions';
import { InstitutionsPage } from '../pages/institutions/institutions';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SearchPage } from '../pages/search/search';
import { TicketService } from '../pages/services/ticketService';


@NgModule({
  declarations: [
    MyApp,
    InstitutionsPage,
    SubInstitutionsPage,
    DashboardPage,
    TicketPage,
    ServicePage,
    TabsPage,
    NotificationsPage,
    SearchPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InstitutionsPage,
    SubInstitutionsPage,
    DashboardPage,
    TicketPage,
    ServicePage,
    TabsPage,
    NotificationsPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TicketService,
  
  ]
})
export class AppModule {}
