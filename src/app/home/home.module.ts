import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalRouterComponent } from "./modal-router/modal-router.component";
import { ModalContainerComponent } from "./modal-container/modal-container.component";
import { ActualItemComponent } from "./actual-item/actual-item.component";
import { AnotherActualItemComponent } from "./another-actual-item/another-actual-item.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ModalContainerComponent,
    ModalRouterComponent,
    ActualItemComponent,
    AnotherActualItemComponent
  ],
  entryComponents: [ModalRouterComponent]
})
export class HomePageModule {}
