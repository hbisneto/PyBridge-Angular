import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ProjectTypesComponent } from './project-types/project-types.component';
import { ProjectConfigComponent } from './project-config/project-config.component';
import { BridgeGeneratorComponent } from './bridge-generator/bridge-generator.component';
import { PickerwarnComponent } from './pickerwarn/pickerwarn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationbarComponent,
    ProjectTypesComponent,
    ProjectConfigComponent,
    BridgeGeneratorComponent,
    PickerwarnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
