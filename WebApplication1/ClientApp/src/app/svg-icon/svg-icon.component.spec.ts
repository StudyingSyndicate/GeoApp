import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

/**
 * @title SVG icons
 */
@Component({
  selector: 'svg-icon',
  templateUrl: 'svg-icon.html',
  styleUrls: ['svg-icon.css'],
})
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'SibGeoTekh_logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/SibGeoTekh_logo.svg'));
  }
}
