import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LikeWidgetComponent,
    FontAwesomeModule
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LikeWidgetComponent
  ]
})
export class LikeWidgetModule { }
