import { ISongStreamLink } from './i-song-stream-link';

export interface ISongStream {
	default: ISongStreamLink
	err: number
	msg: string
}
