import {Injectable} from '@angular/core';
import {StrService} from "./str.service";

declare let moment: any;

@Injectable({
	providedIn: 'root'
})
export class HelperService {

	constructor(private str: StrService) {
	}

	public momentUnix(value: number, format: string = 'mm:ss'): string {
		return moment.unix(value).format(format);
	}

	public slug(title: string, separator: string = '-'): string {
		return this.str.slug(title, separator);
	}
}
