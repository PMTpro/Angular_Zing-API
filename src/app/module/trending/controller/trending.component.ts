import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ZingApiService}                                  from '../../../service/zing/zing-api.service';
import {Title}                                           from '@angular/platform-browser';
import {HttpClient}                                      from '@angular/common/http';
import {ChartRealtime}                                   from '../../../service/zing/send/chart-realtime';
import {CacheFactory}                                    from '../../../service/cache-factory.service';
import {ISong}                                           from "../../../meta/i-song";
import {BaseResponse}                                    from "../../../meta/base-response";

@Component({
	selector: 'app-trending',
	templateUrl: './trending.component.html',
	encapsulation: ViewEncapsulation.None
})
export class TrendingComponent implements OnInit, OnDestroy {
	title = 'Trending songs - TCloud';
	cache_key: string;
	data:      any;

	constructor(
		private zingApi: ZingApiService,
		private titleService: Title,
		private http: HttpClient,
		private cache: CacheFactory
	) {
		this.titleService.setTitle(this.title);
		this.cache_key = this.zingApi.zingConfig.API_CHART_REALTIME_DETAIL + '/' + this.zingApi.zingConfig.TYPE_SONG;
	}

	ngOnInit(): void {
		console.log(this.data)
		let data = this.cache.get(this.cache_key);
		if (data === void 0) {
			let chartRealtime: ChartRealtime = {
				type:  this.zingApi.zingConfig.TYPE_SONG,
				time: -1,
				count: 100,
			};

			let url = this.zingApi.buildAPIURL(
				this.zingApi.zingConfig.API_CHART_REALTIME_DETAIL,
				chartRealtime
			);

			let o = this.http.get(url).subscribe(value => {
				this.cache.set(this.cache_key, value as BaseResponse)
				o.unsubscribe();
				o = null;
				this.renderData();
				console.log('Load', this.data)
			});
		}else{
			console.log('Cache', this.data)
			this.renderData();
		}
	}

	renderData(): void {
		this.data = this.cache.get(this.cache_key);
	}

	ngOnDestroy(): void {
		console.log('Destroyed TrendingComponent');
	}

}
