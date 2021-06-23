import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { LandingSection1Component } from './landing-section1/landing-section1.component';
import { FooterComponent } from './footer/footer.component';
import { LandingSection2Component } from './landing-section2/landing-section2.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Page404Component } from './page404/page404.component';
import { SubmitpropertyComponent } from './submitproperty/submitproperty.component';
import { ItemListComponent } from './item-list/item-list.component';
import { UserPropertiesComponent } from './user-properties/user-properties.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    LandingSection1Component,
    FooterComponent,
    LandingSection2Component,
    ItemComponent,
    ItemDetailComponent,
    LandingPageComponent,
    AuthenticationComponent,
    Page404Component,
    SubmitpropertyComponent,
    ItemListComponent,
    UserPropertiesComponent,
    UserProfileComponent,
    ContactUsComponent,
    ChangePasswordComponent
  ],
  imports: [ 
    FormsModule,  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
