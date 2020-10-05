import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class WindowEventService {
	event: Map<string, Array<any>> = new Map<string, Array<any>>();

	constructor() {

		// onclick
		window.addEventListener('onclick', this.onClick.bind(this), false);

		// on up
		window.addEventListener('mouseup', this.onUp.bind(this), false);
		window.addEventListener('touchend', this.onUp.bind(this), false);

		// on down
		window.addEventListener('mousedown', this.onDown.bind(this), false);
		window.addEventListener('touchstart', this.onDown.bind(this), false);

		// on move
		window.addEventListener('mousemove', this.onMove.bind(this), false);
		window.addEventListener('touchmove', this.onMove.bind(this), false);
	}

	on(event, element) {
		let e = this.event.get(event);
		if (e === void 0) {
			e = [];
			this.event.set(event, e);
		}
		e.push(element);
	}

	off(event, element) {
		let e = this.event.get(event);
		if (e !== void 0) {
			for (let i = 0; i < e.length; i++) {
				if (e[i] === element) {
					e.splice(i, 1);
					break
				}
			}
		}
	}

	onMove(event) {
		let oM = this.event.get('onmove');
		if (oM !== void 0)
			oM.forEach(element => {
				element.callback(event);
			});
	}

	onDown(event) {
		let oM = this.event.get('ondown');
		if (oM !== void 0)
			oM.forEach(element => {
				element.callback(event);
			});
	}

	onUp(event) {
		let oM = this.event.get('onup');
		if (oM !== void 0)
			oM.forEach(element => {
				element.callback(event);
			});
	}

	onClick(event) {
		let oM = this.event.get('onclick');
		if (oM !== void 0)
			oM.forEach(element => {
				element.callback(event);
			});
	}
}
