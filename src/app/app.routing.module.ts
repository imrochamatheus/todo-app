import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const APP_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
})
export class AppRoutingModule {}
