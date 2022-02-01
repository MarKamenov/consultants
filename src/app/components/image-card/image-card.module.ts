import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCardComponent } from './image-card.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ImageCardComponent],
	exports: [ImageCardComponent],
})
export class ImageCardModule {}
