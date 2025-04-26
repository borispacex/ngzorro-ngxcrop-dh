import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {ImageCropperModule} from "ngx-image-cropper";

@NgModule({
  imports: [
    WelcomeRoutingModule,
    ImageCropperModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
