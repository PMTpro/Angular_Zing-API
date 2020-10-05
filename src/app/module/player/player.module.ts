import {NgModule}               from '@angular/core';
import {CommonModule}           from '@angular/common';
import {PlayerComponent}        from "./player.component";
import {MusicControlsComponent} from "./music/music-controls/music-controls.component";
import {TrendingRoutingModule}  from "../trending/trending-routing.module";

@NgModule({
	declarations: [
		PlayerComponent,
		MusicControlsComponent,
	],
	imports: [
		CommonModule,
		TrendingRoutingModule,
	],
	exports     : [PlayerComponent]
})
export class PlayerModule {
}
