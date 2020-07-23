import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';
import { AddScreenPageComponent } from './pages/add-screen-page/add-screen-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { ScreensPageComponent } from './pages/screens-page/screens-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login-page/login/login.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'screens', component: ScreensPageComponent },
  { path: 'clients', component: ClientsPageComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'addscreen', component: AddScreenPageComponent },
  { path: 'addclient', component: AddClientPageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
