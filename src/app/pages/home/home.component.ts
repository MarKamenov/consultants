import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { Store } from '@ngxs/store';

import { IConsultant } from '../../../models';
import { LoadList, ToggleOrder } from '../../state/consultant.actions';
import { ConsultantsState } from '../../state/consultant.state';
import { PaginationService, ThemeService } from '../../../services';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class HomeComponent {

  protected store = inject(Store)
  protected themeService = inject(ThemeService)
  protected paginationService = inject(PaginationService);

  constructor() {
    // Create an effect to watch for pagination changes
    effect(() => {
      // Access signals to create dependencies
      this.paginationService.currentPage();
      this.paginationService.itemsPerPage();
      // call api if any of the above signals change
      this.store.dispatch(new LoadList())
    });
  }


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
