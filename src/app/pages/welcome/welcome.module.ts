import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzUploadModule} from "ng-zorro-antd/upload";


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzUploadModule,
    ImageCropperModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
