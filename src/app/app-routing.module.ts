import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentAreaComponent } from './content-area/content-area.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';

const routes: Routes = [
  { path: '', component: ContentAreaComponent },
  { path: 'cart-page', component: CartIconComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
