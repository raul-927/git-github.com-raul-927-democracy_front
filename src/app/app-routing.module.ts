import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'web-site',
    pathMatch: 'full'
  },

  {
    path: 'web-site',
    loadChildren: () => import('./modules/web-site/web-site.module').then(m => m.WebSiteModule),
  },
  {
    path: 'application',
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
