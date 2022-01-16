import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export class AppRouting {
  public static routes: Routes = [
    {
      path: '',
      component: AppComponent,
      children: [
        {
          path: 'users',
          loadChildren: () => import('./modules/user-management/user.module').then(m => m.UserModule)
        },
        {
          path: '',
          redirectTo: 'users',
          pathMatch: 'full'
        }
      ]
    }
  ];
}
