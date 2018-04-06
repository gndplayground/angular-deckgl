import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoLondonComponent } from './demo-london/demo-london.component';

const routes: Routes = [
  { path: 'demo/london', component: DemoLondonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
