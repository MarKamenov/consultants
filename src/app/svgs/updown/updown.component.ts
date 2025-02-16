import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-updown',
  templateUrl: './updown.component.html',
})
export class UpdownComponent {
  rotate = input<number>(0)
  rotateStyle = computed(() => `rotate(${this.rotate()}deg)`);
}
