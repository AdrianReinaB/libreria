import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroPageRoutingModule } from './libro-routing.module';

import { LibroPage } from './libro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroPageRoutingModule,ComponentsModule
  ],
  declarations: [LibroPage]
})
export class LibroPageModule {}
