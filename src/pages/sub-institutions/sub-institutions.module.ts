import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubInstitutionsPage } from './sub-institutions';

@NgModule({
  declarations: [
    SubInstitutionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubInstitutionsPage),
  ],
})
export class SubInstitutionsPageModule {}
