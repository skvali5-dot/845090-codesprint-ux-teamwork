import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlacegiftcardComponent } from './placegiftcard/placegiftcard.component';
import { ViewgiftcardComponent } from './viewgiftcard/viewgiftcard.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
 {path:'index',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'placeorder',component:PlacegiftcardComponent},
  {path:'vieworder',component:ViewgiftcardComponent},
  {path:'contact',component:ContactusComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
