import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CacheFactory {
	private cache: Map<string, any> = new Map();

	constructor() {
	}

	public get(key: string): any {
		return this.cache.get(key);
	}

	public flash(key: string): any {
		let data = this.cache.get(key);
		this.delete(key);
		return data;
	}

	public set(key: string, value: any): void {
		this.cache.set(key, value);
	}

	public delete(key: string): void {
		this.cache.delete(key);
	}

	public forEach(fn): void {
		this.cache.forEach(fn);
	}

	public has(key: string): boolean {
		return this.cache.has(key);
	}

	public clear(): void {
		this.cache.clear();
	}
}
