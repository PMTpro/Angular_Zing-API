import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule}             from '@angular/core';

import {AppRoutingModule}    from './app-routing.module';
import {AppComponent}        from './app.component';
import {HeaderComponent}     from './component/header/header.component';
import {FooterComponent}     from './component/footer/footer.component';
import {PlayerModule}        from './module/player/player.module';
import {HttpClientModule}    from '@angular/common/http';
import {LazyLoadImageModule} from "ng-lazyload-image";
import { SlugPipe }          from './system/pipe/slug.pipe';
import {MomentUnixPipe}      from "./system/pipe/moment-unix.pipe";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		SlugPipe
	],
	imports     : [
		BrowserModule,
		HttpClientModule,
		LazyLoadImageModule,
		PlayerModule,
		AppRoutingModule
	],
	providers   : [
		Title
	],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
