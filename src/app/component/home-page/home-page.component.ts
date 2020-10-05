import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ZingApiService}                                  from '../../service/zing/zing-api.service';
import {Title}                                           from '@angular/platform-browser';

@Component({
	selector: 'section',
	templateUrl: './home-page.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit, OnDestroy {
	title = 'TCloud';
	constructor(
		private zingApi: ZingApiService,
		private titleService: Title
	) {
		this.titleService.setTitle(this.title);
	}

	ngOnInit(): void {
		// console.log(this.zingApi.resolveItems('/song/get-song-info', {id: 'ZW9C0WDI'}));
		// console.log(this.zingApi.buildAPIURL('/song/get-song-info', {id: 'ZW9C0WDI'}));
	}

	ngOnDestroy(): void {
		console.log('Destroyed');
	}
}
