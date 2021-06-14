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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
