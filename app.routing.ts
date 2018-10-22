import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './src/app/faq/faq.component';

const appRoutes: Routes = [
  {
    path: 'faq',
    component: FaqComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
