import {NgModule}                                               from '@angular/core';
import {PreloadAllModules, RouterModule, Routes}                from '@angular/router';
import {LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks} from 'ng-lazyload-image';
import {TrendingComponent}       from './controller/trending.component';
import {TrendingMvComponent}     from './controller/trending-mv/trending-mv.component';
import {TrendingWeekComponent}   from './controller/trending-week/trending-week.component';
import {TrendingWeekMvComponent} from './controller/trending-week-mv/trending-week-mv.component';
import {TrendingUsUkComponent}   from './controller/trending-us-uk/trending-us-uk.component';
import {TrendingUsUkMvComponent} from './controller/trending-us-uk-mv/trending-us-uk-mv.component';
import {TrendingKPopComponent}   from './controller/trending-k-pop/trending-k-pop.component';
import {TrendingKPopMvComponent} from './controller/trending-k-pop-mv/trending-k-pop-mv.component';
import {CommonModule}            from '@angular/common';
import {ChartItemComponent}      from './chart-item/chart-item.component';
import {MomentUnixPipe}          from "../../system/pipe/moment-unix.pipe";

const routes: Routes = [
	{
		path     : 'trending',
		component: TrendingComponent
	},
	{
		path     : 'trending/mv',
		component: TrendingMvComponent
	},
	{
		path     : 'trending/week',
		component: TrendingWeekComponent
	},
	{
		path     : 'trending/week/mv',
		component: TrendingWeekMvComponent
	},
	{
		path     : 'trending/us-uk',
		component: TrendingUsUkComponent
	},
	{
		path     : 'trending/us-uk/mv',
		component: TrendingUsUkMvComponent
	},
	{
		path     : 'trending/k-pop',
		component: TrendingKPopComponent
	},
	{
		path     : 'trending/k-pop/mv',
		component: TrendingKPopMvComponent,
	}
];

@NgModule({
	declarations: [
		TrendingComponent,
		TrendingMvComponent,
		TrendingUsUkMvComponent,
		TrendingUsUkComponent,
		TrendingKPopComponent,
		TrendingKPopMvComponent,
		TrendingWeekMvComponent,
		TrendingWeekComponent,
		ChartItemComponent,
		MomentUnixPipe,
	],
	providers   : [{provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks}],
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), CommonModule, LazyLoadImageModule],
	exports: [RouterModule, MomentUnixPipe]
})
export class TrendingRoutingModule {
}
