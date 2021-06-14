import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page404Component } from './page404/page404.component';
import { SubmitpropertyComponent } from './submitproperty/submitproperty.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPropertiesComponent } from './user-properties/user-properties.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'online',component:ItemDetailComponent},
  {path:'login',component:AuthenticationComponent},
  {path:'submit-property',component:SubmitpropertyComponent},
  {path:'properties',component:ItemListComponent},
  {path:'user-properties',component:UserPropertiesComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'**',component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
