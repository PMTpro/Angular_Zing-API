import {IArtist} from "./i-artist";

export interface ISong {
	alias: string;
	allow_audio_ads: boolean;
	artist: IArtist;
	artists: Array<IArtist>;
	artists_names: string;
	created_at: number;
	duration: number;
	has_lyric: boolean;
	id: string;
	isOffical: boolean;
	isRBT: boolean;
	isVN: boolean;
	is_worldwide: boolean;
	is_zma: boolean;
	link: string;
	listen: number;
	lyric: string;
	number_top_zing: number;
	privacy: string;
	public_status: number;
	raking_status: number;
	raw_id: number;
	released_at: number;
	score: number;
	status_code: number;
	status_name: string;
	streaming_status: number;
	thumbnail: string;
	thumbnail_medium: string;
	title: string;
}
