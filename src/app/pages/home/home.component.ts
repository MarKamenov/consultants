import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IConsultant } from '../../../models';
import { LoadList, ToggleOrder } from '../../state/consultant.actions';
import { ConsultantsState } from '../../state/consultant.state';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class HomeComponent implements OnInit {

  public readonly consultantsList$: Observable<IConsultant[]> = inject(Store).select(ConsultantsState.consultants);


  protected isAscendingSort = signal<boolean>(true);

  public constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.dispatch(new LoadList());
  }

  /**
   * toggle order
   */
  public toggleOrder() {
    // this.isAscendingSort = !this.isAscendingSort
    this.isAscendingSort.update(isAcs => !isAcs);
    this.store.dispatch(new ToggleOrder(this.isAscendingSort()))
  }
}
