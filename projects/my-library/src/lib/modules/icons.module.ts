import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { AlertTriangle, Loader, X } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  AlertTriangle,
  Loader,
  X,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
