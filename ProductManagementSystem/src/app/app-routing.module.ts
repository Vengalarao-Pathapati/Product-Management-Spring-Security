import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UnknownuserComponent } from './unknownuser/unknownuser.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  
  {path: 'logout', component: LogoutComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'updateproduct/:id', component: UpdateproductComponent},
  {path: 'updateproduct', component: UpdateproductComponent},
  {path: 'unknownuser', component: UnknownuserComponent},
  {path: 'dashboard', component: DashboardComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
