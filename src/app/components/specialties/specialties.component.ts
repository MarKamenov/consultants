import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-specialties',
    templateUrl: './specialties.component.html',
    styleUrls: ['./specialties.component.scss'],
    standalone: false
})
export class SpecialtiesComponent {

  @Input() public specialties: string | string[] = '';

  public isArray = (item:string[] | string):boolean => Array.isArray(item)
}