import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './component/addbook/addbook.component';
import { CartComponent } from './component/cart/cart.component';
import { DisplayBookComponent } from './component/display-book/display-book.component';
import { LoginComponent } from './component/login/login.component';
import { OrderSucessfulComponent } from './component/order-sucessful/order-sucessful.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, 
  { path: 'books', component: DisplayBookComponent },
  { path: 'addbooks', component: AddbookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderSucessfulComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
