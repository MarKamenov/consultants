import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IConsultant } from '../../../models';
import { LoadList, ToggleOrder } from '../../state/consultant.actions';
import { ConsultantsState } from '../../state/consultant.state';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @Select(ConsultantsState.consultants)
  public readonly consultantsList$: Observable<IConsultant[]>;

  private isAscendingSort: boolean = true;
  
  public constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(new LoadList());
  }

  /**
   * toggle order
   */
  public toggleOrder() {
    this.isAscendingSort = !this.isAscendingSort
    this.store.dispatch(new ToggleOrder(this.isAscendingSort))
  }
}
