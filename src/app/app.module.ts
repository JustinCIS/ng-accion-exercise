import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileInfoFormComponent } from './components/profile-info-form/profile-info-form.component';
import { ProfileListComponentComponent } from './components/profile-list-component/profile-list-component.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileListCardComponent } from './components/profile-list-card/profile-list-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoFormComponent,
    ProfileListComponentComponent,
    ProfileViewComponent,
    ProfileListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
