import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StrService {
	constructor() {
	}

	slug(title: string, separator: string = '-'): string {
		let result = this.ascii(title);

		// Convert all dashes/underscores into separator
		let flip = separator == '-' ? "_" : "-";

		result = result.replace(new RegExp('[' + flip + ']+', 'gi'), separator);

		// Replace @ with the word 'at'
		result = result.replace(/@/gi, separator + "at" + separator);
		result = result.toLowerCase();
		result = result.replace(/[\W]+/gi, '-');
		result = result.replace(/-{2,}/, '-');

		result = '@' + result + '@';
		result = result.replace(/\@\-|\-\@|\@/gi, '')

		return result.trim();
	}

	ascii(value: string): string {
		value = this.ChangeToSlug(value);
		return value.replace(/[^\x20-\x7E]/gi, '');
	}

	// Slug
	ChangeToSlug(slug: string): string {
		slug = slug.replace(/°|₀|۰|０/gi, '0');
		slug = slug.replace(/¹|₁|۱|１/gi, '1');
		slug = slug.replace(/²|₂|۲|２/gi, '2');
		slug = slug.replace(/³|₃|۳|３/gi, '3');
		slug = slug.replace(/⁴|₄|۴|٤|４/gi, '4');
		slug = slug.replace(/⁵|₅|۵|٥|５/gi, '5');
		slug = slug.replace(/⁶|₆|۶|٦|６/gi, '6');
		slug = slug.replace(/⁷|₇|۷|７/gi, '7');
		slug = slug.replace(/⁸|₈|۸|８/gi, '8');
		slug = slug.replace(/⁹|₉|۹|９/gi, '9');
		slug = slug.replace(/à|á|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ|ā|ą|å|α|ά|ἀ|ἁ|ἂ|ἃ|ἄ|ἅ|ἆ|ἇ|ᾀ|ᾁ|ᾂ|ᾃ|ᾄ|ᾅ|ᾆ|ᾇ|ὰ|ά|ᾰ|ᾱ|ᾲ|ᾳ|ᾴ|ᾶ|ᾷ|а|أ|အ|ာ|ါ|ǻ|ǎ|ª|ა|अ|ا|ａ|ä/gi, 'a');
		slug = slug.replace(/б|β|ب|ဗ|ბ|ｂ/gi, 'b');
		slug = slug.replace(/ç|ć|č|ĉ|ċ|ｃ/gi, 'c');
		slug = slug.replace(/ď|ð|đ|ƌ|ȡ|ɖ|ɗ|ᵭ|ᶁ|ᶑ|д|δ|د|ض|ဍ|ဒ|დ|ｄ/gi, 'd');
		slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|ë|ē|ę|ě|ĕ|ė|ε|έ|ἐ|ἑ|ἒ|ἓ|ἔ|ἕ|ὲ|έ|е|ё|э|є|ə|ဧ|ေ|ဲ|ე|ए|إ|ئ|ｅ/gi, 'e');
		slug = slug.replace(/ф|φ|ف|ƒ|ფ|ｆ/gi, 'f');

		slug = slug.replace(/ĝ|ğ|ġ|ģ|г|ґ|γ|ဂ|გ|گ|ｇ/gi, 'g');
		slug = slug.replace(/ĥ|ħ|η|ή|ح|ه|ဟ|ှ|ჰ|ｈ/gi, 'h');
		slug = slug.replace(/í|ì|ỉ|ĩ|ị|î|ï|ī|ĭ|į|ı|ι|ί|ϊ|ΐ|ἰ|ἱ|ἲ|ἳ|ἴ|ἵ|ἶ|ἷ|ὶ|ί|ῐ|ῑ|ῒ|ΐ|ῖ|ῗ|і|ї|и|ဣ|ိ|ီ|ည်|ǐ|ი|इ|ی|ｉ/gi, 'i');
		slug = slug.replace(/ĵ|ј|Ј|ჯ|ج|ｊ/gi, 'j');
		slug = slug.replace(/ķ|ĸ|к|κ|Ķ|ق|ك|က|კ|ქ|ک|ｋ/gi, 'k');
		slug = slug.replace(/ł|ľ|ĺ|ļ|ŀ|л|λ|ل|လ|ლ|ｌ/gi, 'l');

		slug = slug.replace(/м|μ|م|မ|მ|ｍ/gi, 'm');
		slug = slug.replace(/ñ|ń|ň|ņ|ŉ|ŋ|ν|н|ن|န|ნ|ｎ/gi, 'n');
		slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|ø|ō|ő|ŏ|ο|ὀ|ὁ|ὂ|ὃ|ὄ|ὅ|ὸ|ό|о|و|ို|ǒ|ǿ|º|ო|ओ|ｏ|ö/gi, 'o');
		slug = slug.replace(/п|π|ပ|პ|پ|ｐ/gi, 'p');
		slug = slug.replace(/ყ|ｑ/gi, 'q');
		slug = slug.replace(/ŕ|ř|ŗ|р|ρ|ر|რ|ｒ/gi, 'r');
		slug = slug.replace(/ś|š|ş|с|σ|ș|ς|س|ص|စ|ſ|ს|ｓ/gi, 's');
		slug = slug.replace(/ť|ţ|т|τ|ț|ت|ط|ဋ|တ|ŧ|თ|ტ|ｔ/gi, 't');
		slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|û|ū|ů|ű|ŭ|ų|µ|у|ဉ|ု|ူ|ǔ|ǖ|ǘ|ǚ|ǜ|უ|उ|ｕ|ў|ü/gi, 'u');
		slug = slug.replace(/в|ვ|ϐ|ｖ/gi, 'v');
		slug = slug.replace(/ŵ|ω|ώ|ဝ|ွ|ｗ/gi, 'w');
		slug = slug.replace(/χ|ξ|ｘ/gi, 'x');
		slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ|ÿ|ŷ|й|ы|υ|ϋ|ύ|ΰ|ي|ယ|ｙ/gi, 'y');

		slug = slug.replace(/ź|ž|ż|з|ζ|ز|ဇ|ზ|ｚ/gi, 'z');
		slug = slug.replace(/ع|आ|آ/gi, 'aa');
		slug = slug.replace(/æ|ǽ/gi, 'ae');
		slug = slug.replace(/ऐ/gi, 'ai');

		slug = slug.replace(/ч|ჩ|ჭ|چ/gi, 'ch');
		slug = slug.replace(/ђ|đ/gi, 'dj');
		slug = slug.replace(/џ|ძ/gi, 'dz');
		slug = slug.replace(/ऍ/gi, 'ei');
		slug = slug.replace(/غ|ღ/gi, 'gh');
		slug = slug.replace(/ई/gi, 'ii');
		slug = slug.replace(/ĳ/gi, 'ij');
		slug = slug.replace(/х|خ|ხ/gi, 'kh');
		slug = slug.replace(/љ/gi, 'lj');
		slug = slug.replace(/њ/gi, 'nj');
		slug = slug.replace(/ö|œ|ؤ/gi, 'oe');
		slug = slug.replace(/ऑ/gi, 'oi');

		slug = slug.replace(/ऒ/gi, 'oii');
		slug = slug.replace(/ψ/gi, 'ps');
		slug = slug.replace(/ш|შ|ش/gi, 'sh');
		slug = slug.replace(/щ/gi, 'shch');
		slug = slug.replace(/ß/gi, 'ss');

		slug = slug.replace(/ŝ/gi, 'sx');
		slug = slug.replace(/þ|ϑ|θ|ث|ذ|ظ/gi, 'th');
		slug = slug.replace(/ц|ც|წ/gi, 'ts');
		slug = slug.replace(/ü/gi, 'ue');
		slug = slug.replace(/ऊ/gi, 'uu');
		slug = slug.replace(/я/gi, 'ya');
		slug = slug.replace(/ю/gi, 'yu');
		slug = slug.replace(/ж|ჟ|ژ/gi, 'zh');
		slug = slug.replace(/©/gi, '(c)');
		slug = slug.replace(/Á|À|Ả|Ã|Ạ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ|Å|Ā|Ą|Α|Ά|Ἀ|Ἁ|Ἂ|Ἃ|Ἄ|Ἅ|Ἆ|Ἇ|ᾈ|ᾉ|ᾊ|ᾋ|ᾌ|ᾍ|ᾎ|ᾏ|Ᾰ|Ᾱ|Ὰ|Ά|ᾼ|А|Ǻ|Ǎ|Ａ|Ä/gi, 'A');
		slug = slug.replace(/Б|Β|ब|Ｂ/gi, 'B');
		slug = slug.replace(/Ç|Ć|Č|Ĉ|Ċ|Ｃ/gi, 'C');
		slug = slug.replace(/Ď|Ð|Đ|Ɖ|Ɗ|Ƌ|ᴅ|ᴆ|Д|Δ|Ｄ/gi, 'D');
		slug = slug.replace(/É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ë|Ē|Ę|Ě|Ĕ|Ė|Ε|Έ|Ἐ|Ἑ|Ἒ|Ἓ|Ἔ|Ἕ|Έ|Ὲ|Е|Ё|Э|Є|Ə|Ｅ/gi, 'E');
		slug = slug.replace(/Ф|Φ|Ｆ/gi, 'F');
		slug = slug.replace(/Ğ|Ġ|Ģ|Г|Ґ|Γ|Ｇ/gi, 'G');
		slug = slug.replace(/Η|Ή|Ħ|Ｈ/gi, 'H');
		slug = slug.replace(/Í|Ì|Ỉ|Ĩ|Ị|Î|Ï|Ī|Ĭ|Į|İ|Ι|Ί|Ϊ|Ἰ|Ἱ|Ἳ|Ἴ|Ἵ|Ἶ|Ἷ|Ῐ|Ῑ|Ὶ|Ί|И|І|Ї|Ǐ|ϒ|Ｉ/gi, 'I');
		slug = slug.replace(/Ｊ/gi, 'J');
		slug = slug.replace(/К|Κ|Ｋ/gi, 'K');
		slug = slug.replace(/Ĺ|Ł|Л|Λ|Ļ|Ľ|Ŀ|ल|Ｌ/gi, 'L');

		slug = slug.replace(/М|Μ|Ｍ/gi, 'M');
		slug = slug.replace(/Ń|Ñ|Ň|Ņ|Ŋ|Н|Ν|Ｎ/gi, 'N');
		slug = slug.replace(/Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ø|Ō|Ő|Ŏ|Ο|Ό|Ὀ|Ὁ|Ὂ|Ὃ|Ὄ|Ὅ|Ὸ|Ό|О|Ө|Ǒ|Ǿ|Ｏ|Ö/gi, 'O');

		slug = slug.replace(/П|Π|Ｐ/gi, 'P');
		slug = slug.replace(/Ｑ/gi, 'Q');
		slug = slug.replace(/Ř|Ŕ|Р|Ρ|Ŗ|Ｒ/gi, 'R');
		slug = slug.replace(/Ş|Ŝ|Ș|Š|Ś|С|Σ|Ｓ/gi, 'S');
		slug = slug.replace(/Ť|Ţ|Ŧ|Ț|Т|Τ|Ｔ/gi, 'T');
		slug = slug.replace(/Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û|Ū|Ů|Ű|Ŭ|Ų|У|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ|Ｕ|Ў|Ü/gi, 'U');
		slug = slug.replace(/В|Ｖ/gi, 'V');
		slug = slug.replace(/Ω|Ώ|Ŵ|Ｗ/gi, 'W');
		slug = slug.replace(/Χ|Ξ|Ｘ/gi, 'X');
		slug = slug.replace(/Ý|Ỳ|Ỷ|Ỹ|Ỵ|Ÿ|Ῠ|Ῡ|Ὺ|Ύ|Ы|Й|Υ|Ϋ|Ŷ|Ｙ/gi, 'Y');
		slug = slug.replace(/Ź|Ž|Ż|З|Ζ|Ｚ/gi, 'Z');
		slug = slug.replace(/Æ|Ǽ/gi, 'AE');
		slug = slug.replace(/Ч/gi, 'Ch');
		slug = slug.replace(/Ђ/gi, 'Dj');
		slug = slug.replace(/Џ/gi, 'Dz');
		slug = slug.replace(/Ĝ/gi, 'Gx');
		slug = slug.replace(/Ĥ/gi, 'Hx');

		slug = slug.replace(/Ĳ/gi, 'Ij');
		slug = slug.replace(/Ĵ/gi, 'Jx');
		slug = slug.replace(/Х/gi, 'Kh');
		slug = slug.replace(/Љ/gi, 'Lj');
		slug = slug.replace(/Њ/gi, 'Nj');
		slug = slug.replace(/Œ/gi, 'Oe');
		slug = slug.replace(/Ψ/gi, 'Ps');
		slug = slug.replace(/Ш/gi, 'Sh');
		slug = slug.replace(/Щ/gi, 'Shch');
		slug = slug.replace(/ẞ/gi, 'Ss');
		slug = slug.replace(/Þ|Θ/gi, 'Th');
		slug = slug.replace(/Ц/gi, 'Ts');
		slug = slug.replace(/Я/gi, 'Ya');
		slug = slug.replace(/Ю/gi, 'Yu');
		slug = slug.replace(/Ж/gi, 'Zh');

		slug = slug.replace(/\xC2\xA0|\xE2\x80\x80|\xE2\x80\x81|\xE2\x80\x82|\xE2\x80\x83|\xE2\x80\x84|\xE2\x80\x85|\xE2\x80\x86|\xE2\x80\x87|\xE2\x80\x88|\xE2\x80\x89|\xE2\x80\x8A|\xE2\x80\xAF|\xE2\x81\x9F|\xE3\x80\x80|\xEF\xBE\xA0/gi, ' ');

		return slug;
	}
}
