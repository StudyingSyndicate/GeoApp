import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./user/components/projects/projects.component";
import {GeoServicesComponent} from "./user/components/geo-services/geo-services.component";
import {AboutComponent} from "./user/components/about/about.component";
import {ProjectItemComponent} from "./user/components/projects/project-item/project-item.component";
import {HomeComponent} from "./user/components/home/home.component";
import {ContactsComponent} from "./user/components/contacts/contacts.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }, {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'about',
    component: AboutComponent,
  }, {
    path: 'geo-services',
    component: GeoServicesComponent,
  }, {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectsComponent,
        pathMatch: 'full'
      }, {
        path: ':projectName',
        component: ProjectItemComponent,
      }]
  }, {
    path: 'contacts',
    component: ContactsComponent,
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
