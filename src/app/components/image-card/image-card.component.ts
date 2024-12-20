import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  standalone: false
})
export class ImageCardComponent {
  @Input() public image: string | null = null
}
