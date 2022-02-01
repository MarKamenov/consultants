import { Component, Input } from '@angular/core';
import { IConsultant } from '../../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public consultant: IConsultant;
}
