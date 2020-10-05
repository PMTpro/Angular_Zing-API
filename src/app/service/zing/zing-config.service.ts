import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ZingConfigService {
	private _API_KEY: string     = '38e8643fb0dc04e8d65b99994d3dafff';
	private _PRIVATE_KEY: string = '10a01dcf33762d3a204cb96429918ff6';

	private _API_URL: string     = 'https://zingmp3.vn/api';
	private _API_URL_C_D: string = 'https://ac.zingmp3.vn/complete/desktop?type=song&num=10&query=';
	private _API_URL_S_K: string = 'https://ac.zingmp3.vn/suggestKeyword/desktop?num=10&query=';

	private _API_HOME: string = '/home';

	private _API_PLAYLIST_SONGS: string      = '/playlist/get-songs';
	private _API_SONG_DETAIL: string         = '/song/get-song-detail';
	private _API_SONG_STREAMING: string      = '/song/get-streamings';
	private _API_SONG_STREAMING_BEAT: string = '/song/get-streamings-beat';
	private _API_SONG_KARAOKE_URL: string    = '/song/get-karaoke-url';
	private _API_SONG_LIST: string           = '/song/get-list';
	private _API_SONG_INFO: string           = '/song/get-song-info';
	private _API_PLAYLIST_DETAIL: string     = '/playlist/get-playlist-detail';
	private _API_PLAYLIST_LIST: string       = '/playlist/get-list';

	private _API_VIDEO_DETAIL: string          = '/video/get-video-detail'
	private _API_VIDEO_LIST: string            = '/video/get-list'
	private _API_ARTIST_INFO_ALIAS: string     = '/artist/get-info-by-alias'
	private _API_ARTIST_DETAIL: string         = '/artist/get-detail'
	private _API_ARTIST_LIST: string           = '/artist/get-list'
	private _API_GENRE_INFO: string            = '/genre/get-info'
	private _API_GENRE_VIDEO: string           = '/genre/get-video-home'
	private _API_GENRE_ALBUM: string           = '/genre/get-album-home'
	private _API_GENRE_ARTIST: string          = '/genre/get-artist-home'
	private _API_CHART: string                 = '/chart/get-chart'
	private _API_CHART_NEW_RELEASE: string     = '/chart/get-chart-new-release'
	private _API_CHART_REALTIME_DETAIL: string = '/chart-realtime/get-detail'
	private _API_TOP_100: string               = '/top100'
	private _API_TOPIC_GROUP: string           = '/topic/get-group'
	private _API_TOPIC_DETAIL: string          = '/topic/get-detail'
	private _API_RECOMMEND: string             = '/recommend'
	private _API_SEARCH_MULTI: string          = '/search/multi'
	private _API_SEARCH: string                = '/search'
	private _API_SEARCH_HOT_KEY: string        = '/search/get-hot-key'
	private _API_DOWNLOAD_TOKEN: string        = '/download/get-token'
	private _API_DOWNLOAD_ZIP_SONGS: string    = '/download/zip-songs'
	private _API_DOWNLOAD_SONGS: string        = '/download/download-songs'
	private _API_DOWNLOAD_STREAMING: string    = '/download/get-streamings'

	private _TYPE_SONG: string  = 'song'
	private _TYPE_VIDEO: string = 'video'

	constructor() {
	}

	get TYPE_SONG(): string {
		return this._TYPE_SONG;
	}

	get TYPE_VIDEO(): string {
		return this._TYPE_VIDEO;
	}

	get API_URL(): string {
		return this._API_URL;
	}

	get API_KEY(): string {
		return this._API_KEY;
	}

	get PRIVATE_KEY(): string {
		return this._PRIVATE_KEY;
	}

	get API_HOME(): string {
		return this._API_HOME;
	}

	get API_URL_C_D(): string {
		return this._API_URL_C_D;
	}

	get API_URL_S_K(): string {
		return this._API_URL_S_K;
	}

	get API_PLAYLIST_SONGS(): string {
		return this._API_PLAYLIST_SONGS;
	}

	get API_SONG_DETAIL(): string {
		return this._API_SONG_DETAIL;
	}

	get API_SONG_STREAMING(): string {
		return this._API_SONG_STREAMING;
	}

	get API_SONG_STREAMING_BEAT(): string {
		return this._API_SONG_STREAMING_BEAT;
	}

	get API_SONG_KARAOKE_URL(): string {
		return this._API_SONG_KARAOKE_URL;
	}

	get API_SONG_LIST(): string {
		return this._API_SONG_LIST;
	}

	get API_SONG_INFO(): string {
		return this._API_SONG_INFO;
	}

	get API_PLAYLIST_DETAIL(): string {
		return this._API_PLAYLIST_DETAIL;
	}

	get API_PLAYLIST_LIST(): string {
		return this._API_PLAYLIST_LIST;
	}

	get API_VIDEO_DETAIL(): string {
		return this._API_VIDEO_DETAIL;
	}

	get API_VIDEO_LIST(): string {
		return this._API_VIDEO_LIST;
	}

	get API_ARTIST_INFO_ALIAS(): string {
		return this._API_ARTIST_INFO_ALIAS;
	}

	get API_ARTIST_DETAIL(): string {
		return this._API_ARTIST_DETAIL;
	}

	get API_ARTIST_LIST(): string {
		return this._API_ARTIST_LIST;
	}

	get API_GENRE_INFO(): string {
		return this._API_GENRE_INFO;
	}

	get API_GENRE_VIDEO(): string {
		return this._API_GENRE_VIDEO;
	}

	get API_GENRE_ALBUM(): string {
		return this._API_GENRE_ALBUM;
	}

	get API_GENRE_ARTIST(): string {
		return this._API_GENRE_ARTIST;
	}

	get API_CHART(): string {
		return this._API_CHART;
	}

	get API_CHART_NEW_RELEASE(): string {
		return this._API_CHART_NEW_RELEASE;
	}

	get API_CHART_REALTIME_DETAIL(): string {
		return this._API_CHART_REALTIME_DETAIL;
	}

	get API_TOP_100(): string {
		return this._API_TOP_100;
	}

	get API_TOPIC_GROUP(): string {
		return this._API_TOPIC_GROUP;
	}

	get API_TOPIC_DETAIL(): string {
		return this._API_TOPIC_DETAIL;
	}

	get API_RECOMMEND(): string {
		return this._API_RECOMMEND;
	}

	get API_SEARCH_MULTI(): string {
		return this._API_SEARCH_MULTI;
	}

	get API_SEARCH(): string {
		return this._API_SEARCH;
	}

	get API_SEARCH_HOT_KEY(): string {
		return this._API_SEARCH_HOT_KEY;
	}

	get API_DOWNLOAD_TOKEN(): string {
		return this._API_DOWNLOAD_TOKEN;
	}

	get API_DOWNLOAD_ZIP_SONGS(): string {
		return this._API_DOWNLOAD_ZIP_SONGS;
	}

	get API_DOWNLOAD_SONGS(): string {
		return this._API_DOWNLOAD_SONGS;
	}

	get API_DOWNLOAD_STREAMING(): string {
		return this._API_DOWNLOAD_STREAMING;
	}
}
