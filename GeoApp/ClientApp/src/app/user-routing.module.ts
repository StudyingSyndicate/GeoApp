import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CpsNgkmComponent} from "./user/components/projects/items/cps-ngkm/cps-ngkm.component";
import {MaeinComponent} from "./user/components/projects/items/maein/maein.component";
import {MaeinGes2Component} from "./user/components/projects/items/maein-ges-2/maein-ges-2.component";
import {HomeComponent} from "./user/components/home/home.component";
import {OrnaculComponent} from "./user/components/projects/items/ornacul/ornacul.component";
import {MaeinGesComponent} from "./user/components/projects/items/maein-ges/maein-ges.component";
import {OrsugComponent} from "./user/components/projects/items/orsug/orsug.component";
import {ProjectsComponent} from "./user/components/projects/projects.component";
import {GeoServicesComponent} from "./user/components/geo-services/geo-services.component";
import {AboutComponent} from "./user/components/about/about.component";
import {AccaragComponent} from "./user/components/projects/items/accarag/accarag.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'geo-services',
    component: GeoServicesComponent
  }, {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectsComponent
      }, {
        path: 'ornacul',
        component: OrnaculComponent
      }, {
        path: 'accarag',
        component: AccaragComponent
      }, {
        path: 'cps-ngkm',
        component: CpsNgkmComponent
      }, {
        path: 'maein',
        component: MaeinComponent
      }, {
        path: 'maein-ges',
        component: MaeinGesComponent
      }, {
        path: 'maein-ges-2',
        component: MaeinGes2Component
      }, {
        path: 'orsug',
        component: OrsugComponent
      }]
  }
  /*{ path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
