import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
/*import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule,} from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';*/






import {MatNativeDateModule} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpInterceptorService } from './httpInterceptor.service';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UnknownuserComponent } from './unknownuser/unknownuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ProductListComponent,
    AddproductComponent,
    UpdateproductComponent,
    UnknownuserComponent,
    DashboardComponent,
    NavbarComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    

    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
     
    RouterModule.forRoot([])

   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
