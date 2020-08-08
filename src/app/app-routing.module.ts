import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActualItemComponent } from "./home/actual-item/actual-item.component";
import { AnotherActualItemComponent } from "./home/another-actual-item/another-actual-item.component";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
