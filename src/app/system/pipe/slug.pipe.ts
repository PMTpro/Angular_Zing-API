import {Pipe, PipeTransform} from '@angular/core';
import {StrService}          from "../../service/str.service";

@Pipe({
	name: 'slug'
})
export class SlugPipe implements PipeTransform {
	constructor(private str: StrService) {
	}

	transform(title: string, separator: string = '-'): string {
		return this.str.slug(title, separator);
	}
}
