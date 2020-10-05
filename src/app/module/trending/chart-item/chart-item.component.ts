import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CacheFactory}                                from '../../../service/cache-factory.service';
import {ZingApiService}                              from '../../../service/zing/zing-api.service';
import {ISong}                                       from "../../../meta/i-song";
import {AudioService}                                from 'src/app/service/audio.service';

@Component({
	selector     : '.chart-item',
	templateUrl  : './chart-item.component.html',
	encapsulation: ViewEncapsulation.None
})
export class ChartItemComponent implements OnInit {
	@Input()
	index: number;

	song: ISong;

	constructor(
		private zingApi: ZingApiService,
		private cache: CacheFactory,
		private audioService: AudioService,
	) {
	}

	ngOnInit(): void {
		let data  = this.cache.get(this.zingApi.zingConfig.API_CHART_REALTIME_DETAIL + '/' + this.zingApi.zingConfig.TYPE_SONG);
		this.song = data.data.items[this.index];
	}

	playSong(): void {
		this.audioService.playSong(this.song);
		console.log(this.song);
	}
}
