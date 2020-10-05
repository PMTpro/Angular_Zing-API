import {Pipe, PipeTransform} from '@angular/core';

declare let moment: any;

@Pipe({
	name: 'momentUnix'
})
export class MomentUnixPipe implements PipeTransform {
	transform(value: number, format: string = 'mm:ss'): unknown {
		return moment.unix(value).format(format);
	}
}
