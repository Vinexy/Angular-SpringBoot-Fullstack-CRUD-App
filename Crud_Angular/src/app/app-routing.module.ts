import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCustomerComponent } from './component/post-customer/post-customer.component';
import { GetAllCustomersComponent } from './component/get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';

const routes: Routes = [
  {path: 'customer',  component: PostCustomerComponent},
  {path: "", component: GetAllCustomersComponent},
  {path: "customer/:id", component: UpdateCustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
