import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatTabsModule,
  MatCardModule
} from '@angular/material';
import { OwlModule } from 'ngx-owl-carousel';
import { GalleryModule } from "@ngx-gallery/core";
import { LightboxModule } from  '@ngx-gallery/lightbox';


import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './user/components/home/home.component';
import { GeoServicesComponent } from './user/components/geo-services/geo-services.component';
import { AboutComponent } from './user/components/about/about.component';
import { AboutMainComponent } from './user/components/about/tabs/about-main/about-main.component';
import { AboutStaffComponent } from './user/components/about/tabs/about-staff/about-staff.component';
import { AboutHistoryComponent } from './user/components/about/tabs/about-history/about-history.component';
import { AboutStructureComponent } from './user/components/about/tabs/about-structure/about-structure.component';
import { AboutGeographyComponent } from './user/components/about/tabs/about-geography/about-geography.component';
import { AboutDocumentsComponent } from './user/components/about/tabs/about-documents/about-documents.component';
import { GeoResearchComponent } from './user/components/geo-services/tabs/geo-research/geo-research.component';
import { IngeneeringResearchComponent } from './user/components/geo-services/tabs/ingeneering-research/ingeneering-research.component';
import { MinePlanningComponent } from './user/components/geo-services/tabs/mine-planning/mine-planning.component';
import { EcoResearchComponent } from './user/components/geo-services/tabs/eco-research/eco-research.component';
import { SurveyorWorksComponent } from './user/components/geo-services/tabs/surveyor-works/surveyor-works.component';
import { ProjectsComponent } from './user/components/projects/projects.component';
import { OrnaculComponent } from './user/components/projects/items/ornacul/ornacul.component';
import { AccaragComponent } from './user/components/projects/items/accarag/accarag.component';
import { OrsugComponent } from './user/components/projects/items/orsug/orsug.component';
import { MaeinComponent } from './user/components/projects/items/maein/maein.component';
import { CpsNgkmComponent } from './user/components/projects/items/cps-ngkm/cps-ngkm.component';
import { MaeinGesComponent } from './user/components/projects/items/maein-ges/maein-ges.component';
import { MaeinGes2Component } from './user/components/projects/items/maein-ges-2/maein-ges-2.component';
import {UserRoutingModule} from "./user-routing.module";
/*import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeoServicesComponent,
    AboutComponent,
    AboutMainComponent,
    AboutStaffComponent,
    AboutHistoryComponent,
    AboutStructureComponent,
    AboutGeographyComponent,
    AboutDocumentsComponent,
    GeoResearchComponent,
    IngeneeringResearchComponent,
    MinePlanningComponent,
    EcoResearchComponent,
    SurveyorWorksComponent,
    ProjectsComponent,
    OrnaculComponent,
    AccaragComponent,
    OrsugComponent,
    MaeinComponent,
    CpsNgkmComponent,
    MaeinGesComponent,
    MaeinGes2Component
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    OwlModule,
    GalleryModule.forRoot({ gestures:false }),
    LightboxModule.forRoot(),
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
