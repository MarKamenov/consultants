import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CardModule, PaginationComponent } from '../../components';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PaginationComponent,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
