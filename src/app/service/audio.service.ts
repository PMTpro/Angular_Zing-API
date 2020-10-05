import {HttpClient}             from '@angular/common/http';
import {Injectable}             from '@angular/core';
import {ISong}                  from '../meta/i-song';
import {MusicControlsComponent} from '../module/player/music/music-controls/music-controls.component';
import {ZingApiService}         from './zing/zing-api.service';
import {BaseResponse}           from "../meta/base-response";
import {ISongStream}            from "../meta/i-song-stream";

@Injectable({
	providedIn: 'root'
})
export class AudioService {
	public song: ISong;

	public musicControls: MusicControlsComponent;

	el_audio: HTMLAudioElement;

	constructor(
		private zingApi: ZingApiService,
		private http: HttpClient
	) {
		this.el_audio              = document.createElement('audio');
		this.el_audio.ontimeupdate = this.ontimeupdate.bind(this);
		this.el_audio.autoplay     = true;
	}

	public setMusicControls(musicControls) {
		this.musicControls = musicControls;
	}

	playSong(song: ISong): void {
		this.song = song;
		this.musicControls.updateInfo(song);
		this.getStream(song.id);
	}

	playId(id: string): void {
		console.log(id);
	}

	getStream(id: string): void {
		let url = this.zingApi.buildAPIURL(this.zingApi.zingConfig.API_SONG_STREAMING, {id: id});
		this.http.get<BaseResponse>(url).subscribe(value => {
			let data          = value.data as ISongStream;
			let link_128      = data.default["128"];
			this.el_audio.src = link_128;
		});
	}

	// Event audio
	ontimeupdate(): void {
		let p_time = (this.el_audio.currentTime / this.song.duration) * 100;
		this.musicControls.updateSliderBar(p_time);

		if (this.el_audio.buffered.length > 0){
			let buffered = (this.el_audio.buffered.end(0) / this.song.duration) * 100;
			this.musicControls.updateSliderBarBuffer(buffered);
		}
	}
}
