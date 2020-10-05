import {NgModule}                                from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomePageComponent}                       from './component/home-page/home-page.component';
import {NotFoundComponent}                       from './component/not-found/not-found.component';
import {TrendingRoutingModule}                   from './module/trending/trending-routing.module';

const routes: Routes = [
	{
		path     : '',
		component: HomePageComponent
	},
	{
		path     : '**',
		component: NotFoundComponent
	}
];

@NgModule({
	declarations: [
		HomePageComponent,
		NotFoundComponent
	],
	imports     : [
		RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
		TrendingRoutingModule
	],
	exports     : [RouterModule]
})
export class AppRoutingModule {
}
