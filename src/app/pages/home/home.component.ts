import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Store } from '@ngxs/store';

import { IConsultant } from '../../../models';
import { ToggleOrder } from '../../state/consultant.actions';
import { ConsultantsState } from '../../state/consultant.state';
import { ThemeService } from '../../../services';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class HomeComponent {

  private store = inject(Store)
  private themeService = inject(ThemeService)

  protected readonly consultantsList$: Observable<IConsultant[]> = this.store.select(ConsultantsState.consultants);

  protected isDarkTheme = this.themeService.isDarkTheme();

  protected isAscendingSort = signal<boolean>(true);

  /**
   * toggle order
   */
  protected toggleOrder() {
    this.isAscendingSort.update(isAcs => !isAcs);
    this.store.dispatch(new ToggleOrder(this.isAscendingSort()))
  }
  // toggle theme
  protected toggleTheme() {
    this.themeService.toggleTheme()
  }

}
