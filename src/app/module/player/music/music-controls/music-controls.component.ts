import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ISong}                                                       from 'src/app/meta/i-song';
import {AudioService}                                                from 'src/app/service/audio.service';
import {HelperService}                                               from 'src/app/service/helper.service';
import {TEvent}                                                      from 'src/app/system/event/t-event';
import {WindowEventService}                                          from 'src/app/system/event/window-event.service';

@Component({
	selector     : '.music-controls',
	templateUrl  : './music-controls.component.html',
	encapsulation: ViewEncapsulation.None
})
export class MusicControlsComponent implements OnInit {
	@ViewChild("slider_bar")
	public sliderBar: ElementRef;
	@ViewChild("slider_bar_fill")
	public sliderBarFill: ElementRef;
	@ViewChild("slider__bar__buffer")
	public sliderBarBuffer: ElementRef;

	@ViewChild("title")
	public title: ElementRef;
	@ViewChild("artist")
	public artist: ElementRef;
	@ViewChild("playing_time")
	public playing_time: ElementRef;
	@ViewChild("duration")
	public duration: ElementRef;
	@ViewChild("thumb")
	public thumb: ElementRef;

	timer: number;
	offset: number;
	isplay: boolean = false;

	private isDown: boolean = false;

	public dotMove: TEvent = new TEvent();
	public dotDown: TEvent = new TEvent();
	public dotUp: TEvent   = new TEvent();

	constructor(
		private windowEventService: WindowEventService,
		public audio: AudioService,
		private helper: HelperService,
	) {
		this.dotMove.callback = this.onSliderHandleMove.bind(this);
		this.dotUp.callback   = this.onSliderHandleUp.bind(this);

		this.audio.setMusicControls(this);
	}

	ngOnInit(): void {
	}

	onSliderBarClick(event: any): void {
		if (this.isDown) {
			this.isDown = false;
			this.windowEventService.off('onmove', this.dotMove);
		} else {
			this.timer = (event.offsetX / this.sliderBar.nativeElement.offsetWidth) * 100;
			this.updateSliderBar(this.timer, true);
			this.updateTimer();
		}
	}

	onSliderHandleMouseDown(event: any): void {
		this.isDown = true;
		this.offset = event.x;
		this.windowEventService.on('onmove', this.dotMove);
		this.windowEventService.on('onup', this.dotUp);
	}

	onSliderHandleUp(): void {
		this.windowEventService.off('onmove', this.dotMove);
		this.windowEventService.off('onup', this.dotUp);

		setTimeout(() => {
			this.isDown = false;
			this.updateTimer();
		}, 1);
	}

	onSliderHandleMove(event: any): void {
		let pp = (event.x - this.offset) + this.offset - this.sliderBar.nativeElement.getBoundingClientRect().x;
		this.sliderBar.nativeElement.getBoundingClientRect().x
		this.timer = (pp / this.sliderBar.nativeElement.offsetWidth) * 100;
		this.updateSliderBar(this.timer, true);
	}

	updateSliderBar(pp, controls: boolean = false) {
		if (!this.isDown || controls === true) {
			if (pp < 0) {
				pp = 0;
			} else if (pp > 100) {
				pp = 100;
			}

			if (!!this.audio.song) {
				let playing_time                          = (pp / 100) * this.audio.song.duration;
				this.playing_time.nativeElement.innerText = this.helper.momentUnix(playing_time);
			}

			this.sliderBarFill.nativeElement.style.width = pp + '%';
		}
	}

	updateSliderBarBuffer(pp) {
		if (pp < 0)
			pp = 0;

		if (pp > 100)
			pp = 100;

		this.sliderBarBuffer.nativeElement.style.width = pp + '%';
	}

	updateTimer() {
		if (!!this.audio.song) {
			this.audio.el_audio.currentTime = (this.timer / 100) * this.audio.song.duration;
		}
	}

	updateInfo(song: ISong): void {
		this.thumb.nativeElement.src              = song.thumbnail;
		this.title.nativeElement.innerText        = song.title;
		this.artist.nativeElement.innerText       = song.artists_names;
		this.playing_time.nativeElement.innerText = this.helper.momentUnix(0);
		this.duration.nativeElement.innerText     = this.helper.momentUnix(song.duration);
	}

	onPlay() {
		if (!!this.audio.song) {
			this.audio.el_audio.play().then((value) => {
				console.log('value', value)
			}).catch((error) => {
				console.log('error', error)
			});
		}
	}

	onPause() {
		this.audio.el_audio.pause();
	}
}
