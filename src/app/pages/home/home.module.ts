import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CardModule, PaginationComponent } from '../../components';
import { DayComponent, NightComponent } from '../../svgs';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PaginationComponent,
    DayComponent, NightComponent,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
