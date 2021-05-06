import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
