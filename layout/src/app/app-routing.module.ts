import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./modules/registration/registration.module').then(module => module.RegistrationModule)
      }
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./modules/setting/setting.module').then(module => module.SettingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
