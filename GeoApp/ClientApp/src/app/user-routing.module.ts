import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./user/components/projects/projects.component";
import {GeoServicesComponent} from "./user/components/geo-services/geo-services.component";
import {AboutComponent} from "./user/components/about/about.component";
import {ProjectItemComponent} from "./user/components/projects/project-item/project-item.component";
import {HomeComponent} from "./user/components/home/home.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
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
        component: ProjectsComponent,
        pathMatch: 'full'
      }, {
        path: ':projectName',
        component: ProjectItemComponent
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
