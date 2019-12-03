import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UsersTableComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    SharedModule
  ]
})
export class HomeModule { }
