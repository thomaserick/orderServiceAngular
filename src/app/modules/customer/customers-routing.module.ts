import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';


const customerRoutes: Routes = [
  {

    path: '',
    data: {
      title: 'Clientes',
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: CustomersListComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'new',
        component: CustomersFormComponent,
        data: {
          title: 'Novo'
        }
      },
      {
        path: 'edit/:id',

        data: {
          title: 'Editar'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
