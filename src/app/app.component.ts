import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'main',
	templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	onActivate(event) {
		window.scroll(0,0);
	}
}
