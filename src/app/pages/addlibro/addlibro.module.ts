import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddlibroPageRoutingModule } from './addlibro-routing.module';

import { AddlibroPage } from './addlibro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddlibroPageRoutingModule,ComponentsModule
  ],
  declarations: [AddlibroPage]
})
export class AddlibroPageModule {}
