import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers

import { AuthGuard } from './core/guards/auth.guard';

import { P404Component } from './core/components/error/404.component';
import { P500Component } from './core/components/error/500.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { ForgotPasswordComponent } from './core/components/forgot/forgot-password.component';
import { DefaultLayoutComponent } from './modules/default-layout';

export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forget-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/user/users.module').then(m => m.UsersModule)
      },
      {
        path: 'customer',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/customer/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/zold/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/zold/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/zold/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },

      {
        path: 'icons',
        loadChildren: () => import('./views/zold/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/zold/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/zold/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
