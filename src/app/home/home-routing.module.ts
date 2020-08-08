import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ModalContainerComponent } from "./modal-container/modal-container.component";
import { ActualItemComponent } from "./actual-item/actual-item.component";
import { AnotherActualItemComponent } from "./another-actual-item/another-actual-item.component";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'menu',
        component: ModalContainerComponent,
        // children: [
        //   {
        //     path: 'detail/:id',
        //     component: ActualItemComponent,
        //     outlet: 'side'
        //   },
        //   {
        //     path: 'basket',
        //     component: AnotherActualItemComponent,
        //     outlet: 'side'
        //   }
        // ],
      },
      {
        path: 'detail/:id',
        component: ActualItemComponent,
        outlet: 'side'
      },
      {
        path: 'basket',
        component: AnotherActualItemComponent,
        outlet: 'side'
      }
    ],
  },
  {
    path: 'detail/:id',
    component: ActualItemComponent,
    outlet: 'side'
  },
  {
    path: 'basket',
    component: AnotherActualItemComponent,
    outlet: 'side'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
