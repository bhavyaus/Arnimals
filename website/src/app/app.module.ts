import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { LoginCardComponent } from './login/login-card/login-card.component';
import { RegisterCardComponent } from './login/register-card/register-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { AllComponent } from './dashboard/all/all.component';
import { AnimalComponent } from './dashboard/animal/animal.component';
import {AnimalService} from "./animal.service";
import { RewardsComponent } from './rewards/rewards.component';
import { OrganizationComponent } from './organization/organization.component';
import { SettingsComponent } from './settings/settings.component';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { TestComponent } from './test/test.component';
import { DonationsComponent } from './donations/donations.component';
import { AddComponent } from './dashboard/animal/add/add.component';
import {ApiService} from "./api.service";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { AddAnimalCardComponent } from './dashboard/animal/add/add-animal-card/add-animal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreditsComponent,
    LoginComponent,
    LoginCardComponent,
    RegisterCardComponent,
    DashboardComponent,
    LeftNavComponent,
    AllComponent,
    AnimalComponent,
    RewardsComponent,
    OrganizationComponent,
    SettingsComponent,
    AnimalInfoComponent,
    TestComponent,
    DonationsComponent,
    AddComponent,
    AddAnimalCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [AnimalService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
