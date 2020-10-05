import {Injectable}        from '@angular/core';
import sha256              from 'crypto-js/sha256';
import hmacSHA512          from 'crypto-js/hmac-sha512';
import {ZingConfigService} from './zing-config.service';

@Injectable({
	providedIn: 'root'
})
export class ZingApiService {
	constructor(
		public zingConfig: ZingConfigService
	) {
	}

	public buildAPIURL(api, data) {
		data.ctime   = this.getCurrentTime();
		data.sig     = this.buildSig(api, data);
		data.api_key = this.zingConfig.API_KEY;

		let param = this.buildQuery(data);
		return this.zingConfig.API_URL.concat(api, '?').concat(param);
	}

	sha256(data) {
		return sha256(data);
	}

	hmacSHA512(api, data) {
		return hmacSHA512(api, data);
	}

	getCurrentTime() {
		return Math.round((new Date).getTime() / 1e3);
	}

	buildSig(api, param) {
		let message     = this.buildMessage(param)
		let sha256_buff = this.sha256('' + message);
		return this.hmacSHA512(api + sha256_buff, this.zingConfig.PRIVATE_KEY);
	}

	sortObject(data) {
		let newData = {};
		Object.keys(data).sort().forEach(function(key) {
			newData[key] = data[key];
		});

		return newData;
	}

	buildQuery(data, separator = null) {
		separator = null !== separator ? separator : '&';
		let encode = encodeURIComponent;

		return Object.keys(data).map(function(key) {
			return encode(data[key]).length > 2e3 ? '' : ''.concat(encode(key), '=').concat(encode(data[key]));
		}).filter(function(e) {
			return '' !== data;
		}).join(separator);
	}

	buildMessage(data) {
		let sortData = this.sortObject(data),
			newData = {};
		for (let key in sortData) {
			'ctime' !== key && 'id' !== key || null !== data[key] && void 0 !== data[key] && (newData[key] = sortData[key]);
		}
		return this.buildQuery(newData, '')
	}
}
