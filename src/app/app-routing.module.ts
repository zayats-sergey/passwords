import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './user/auth/auth.component';
import { DashboardEditorComponent } from './user/dashboard-editor/dashboard-editor.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { HeaderComponent } from './user/header/header.component';
import { HomeComponent } from './user/home/home.component';
import { IsLoggedIn } from './user/isLogged.guard';
import { RegComponent } from './user/reg/reg.component';

const routes: Routes = [
  {
    path:'', component : HeaderComponent,
     children: [
      {path: 'reg', component: RegComponent},
      {path: 'auth', component: AuthComponent},
      {path:'dashboard', component:DashboardComponent, canActivate: [IsLoggedIn]},
      {path: 'home', component: HomeComponent},
      {path: 'dashboard-editor', component: DashboardEditorComponent, canActivate: [IsLoggedIn]},

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
