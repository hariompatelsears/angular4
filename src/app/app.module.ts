import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { BikeComponent } from './bike/bike.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommonService } from './common.service';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'bikes', component: BikeComponent,
  children: [
       { path: 'bikedetail/:id', component: BikeInfoComponent }
    ]
  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'compcomm', component: ParentcomponentComponent },
  { path: 'aboutus', component: AboutusComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    BikeInfoComponent,
    HeaderComponent,
    FooterComponent,
    LeftpanelComponent,
    ContactusComponent,
    TopnavigationComponent,
    HomeComponent,
	AboutusComponent,
	ParentcomponentComponent,
	ChildcomponentComponent,
  ],
  imports: [
  RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
