import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app-routes.routing';

@NgModule({
  imports: [AppRoutes],
  exports: [RouterModule]
})
export class AppRoutingModule {}
