import { PaginationService, ThemeService } from '../../../services';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  protected paginationService = inject(PaginationService);
  protected themeService = inject(ThemeService)
  protected isDarkTheme = this.themeService.isDarkTheme();

  getVisiblePages(): number[] {
    const currentPage = this.paginationService.currentPage();
    const totalPages = this.paginationService.totalPages();
    const pages: number[] = [];

    // Always show first page
    pages.push(1);

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return [...new Set(pages)].sort((a, b) => a - b);
  }

  protected onItemsPerPageChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.paginationService.setItemsPerPage(Number(select.value));
  }

}
