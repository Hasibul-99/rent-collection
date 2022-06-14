import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { LoginComponent } from './pages/auths/login/login.component';
import { RegistrationComponent } from './pages/auths/registration/registration.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { LandlordsComponent } from './pages/private/landlords/landlords.component';
import { PropertiesComponent } from './pages/private/properties/properties.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: "registration",
        component: RegistrationComponent
      }
    ]
  },
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'landlords',
        component: LandlordsComponent
      },
      {
        path: 'properties',
        component: PropertiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
