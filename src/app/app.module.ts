import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login-page/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ScreensPageComponent } from './pages/screens-page/screens-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { MapComponent } from './shared/map/map.component';
import { ScreensListComponent } from './pages/screens-page/screens-list/screens-list.component';
import { ClientsListComponent } from './pages/clients-page/clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';
import { AddScreenPageComponent } from './pages/add-screen-page/add-screen-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    ScreensPageComponent,
    ClientsPageComponent,
    DashboardPageComponent,
    SideMenuComponent,
    MapComponent,
    ScreensListComponent,
    ClientsListComponent,
    AddClientPageComponent,
    AddScreenPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
