import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-updown',
  templateUrl: './updown.component.html',
})
export class UpdownComponent {
  protected rotate = input<number>(0)

  protected rotateStyle = computed(() => `rotate(${this.rotate()}deg)`);
}
