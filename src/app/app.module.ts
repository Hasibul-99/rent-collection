import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { LoginComponent } from './pages/auths/login/login.component';
import { RegistrationComponent } from './pages/auths/registration/registration.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { LandlordsComponent } from './pages/private/landlords/landlords.component';
import { PropertiesComponent } from './pages/private/properties/properties.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    PrivateLayoutComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    LandlordsComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
