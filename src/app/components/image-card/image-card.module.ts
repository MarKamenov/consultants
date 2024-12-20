import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCardComponent } from './image-card.component';
import { HideMissingDirective } from '../../directives'

@NgModule({
  imports: [CommonModule],
  declarations: [ImageCardComponent, HideMissingDirective],
  exports: [ImageCardComponent],
})
export class ImageCardModule { }
