import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {
		path: '',
		redirectTo: '/about',
		pathMatch: 'full'
	},
	{
		path: 'about',
		component: AboutComponent
	},
  {
		path: 'work',
		component: WorkComponent
	},
  {
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}