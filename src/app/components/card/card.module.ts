import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpecialtiesModule } from '../specialties';
import { ImageCardModule } from '../image-card';
import { CardComponent } from './card.component';

@NgModule({
	imports: [CommonModule, ImageCardModule,SpecialtiesModule],
	declarations: [CardComponent],
	exports: [CardComponent],
})
export class CardModule {}
