import { Component, inject } from '@angular/core';
import { ThemeService } from './../services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  protected isDarkTheme = inject(ThemeService).isDarkTheme();
}
