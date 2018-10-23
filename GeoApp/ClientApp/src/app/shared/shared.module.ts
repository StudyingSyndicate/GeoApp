import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery/gallery.component';
import {NgxGalleryModule} from "ngx-gallery";

@NgModule({
  imports: [
    CommonModule,
    NgxGalleryModule,
  ],
  declarations: [
    GalleryComponent,
  ],
  exports: [
    GalleryComponent,
  ]
})
export class SharedModule {
}
