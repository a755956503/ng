/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { MissingTranslationStrategy } from '../core';
import { DEFAULT_INTERPOLATION_CONFIG } from '../ml_parser/interpolation_config';
import { ParseTreeResult } from '../ml_parser/parser';
import { digest } from './digest';
import { mergeTranslations } from './extractor_merger';
import { Xliff } from './serializers/xliff';
import { Xliff2 } from './serializers/xliff2';
import { Xmb } from './serializers/xmb';
import { Xtb } from './serializers/xtb';
import { TranslationBundle } from './translation_bundle';
export class I18NHtmlParser {
    constructor(_htmlParser, translations, translationsFormat, missingTranslation = MissingTranslationStrategy.Warning, console) {
        this._htmlParser = _htmlParser;
        if (translations) {
            const serializer = createSerializer(translationsFormat);
            this._translationBundle =
                TranslationBundle.load(translations, 'i18n', serializer, missingTranslation, console);
        }
        else {
            this._translationBundle =
                new TranslationBundle({}, null, digest, undefined, missingTranslation, console);
        }
    }
    parse(source, url, options = {}) {
        const interpolationConfig = options.interpolationConfig || DEFAULT_INTERPOLATION_CONFIG;
        const parseResult = this._htmlParser.parse(source, url, Object.assign({ interpolationConfig }, options));
        if (parseResult.errors.length) {
            return new ParseTreeResult(parseResult.rootNodes, parseResult.errors);
        }
        return mergeTranslations(parseResult.rootNodes, this._translationBundle, interpolationConfig, [], {});
    }
}
function createSerializer(format) {
    format = (format || 'xlf').toLowerCase();
    switch (format) {
        case 'xmb':
            return new Xmb();
        case 'xtb':
            return new Xtb();
        case 'xliff2':
        case 'xlf2':
            return new Xliff2();
        case 'xliff':
        case 'xlf':
        default:
            return new Xliff();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bl9odG1sX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9pMThuL2kxOG5faHRtbF9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRW5ELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRS9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUdwRCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMxQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxNQUFNLE9BQU8sY0FBYztJQU16QixZQUNZLFdBQXVCLEVBQUUsWUFBcUIsRUFBRSxrQkFBMkIsRUFDbkYscUJBQWlELDBCQUEwQixDQUFDLE9BQU8sRUFDbkYsT0FBaUI7UUFGVCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUdqQyxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxrQkFBa0I7Z0JBQ25CLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMzRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQjtnQkFDbkIsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckY7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQWMsRUFBRSxHQUFXLEVBQUUsVUFBMkIsRUFBRTtRQUM5RCxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSw0QkFBNEIsQ0FBQztRQUN4RixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxrQkFBRyxtQkFBbUIsSUFBSyxPQUFPLEVBQUUsQ0FBQztRQUUzRixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkU7UUFFRCxPQUFPLGlCQUFpQixDQUNwQixXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUNGO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFlO0lBQ3ZDLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV6QyxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssS0FBSztZQUNSLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLEtBQUs7WUFDUixPQUFPLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLE1BQU07WUFDVCxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7UUFDdEIsS0FBSyxPQUFPLENBQUM7UUFDYixLQUFLLEtBQUssQ0FBQztRQUNYO1lBQ0UsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJy4uL21sX3BhcnNlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUd9IGZyb20gJy4uL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge1Rva2VuaXplT3B0aW9uc30gZnJvbSAnLi4vbWxfcGFyc2VyL2xleGVyJztcbmltcG9ydCB7UGFyc2VUcmVlUmVzdWx0fSBmcm9tICcuLi9tbF9wYXJzZXIvcGFyc2VyJztcbmltcG9ydCB7Q29uc29sZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7ZGlnZXN0fSBmcm9tICcuL2RpZ2VzdCc7XG5pbXBvcnQge21lcmdlVHJhbnNsYXRpb25zfSBmcm9tICcuL2V4dHJhY3Rvcl9tZXJnZXInO1xuaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tICcuL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtYbGlmZn0gZnJvbSAnLi9zZXJpYWxpemVycy94bGlmZic7XG5pbXBvcnQge1hsaWZmMn0gZnJvbSAnLi9zZXJpYWxpemVycy94bGlmZjInO1xuaW1wb3J0IHtYbWJ9IGZyb20gJy4vc2VyaWFsaXplcnMveG1iJztcbmltcG9ydCB7WHRifSBmcm9tICcuL3NlcmlhbGl6ZXJzL3h0Yic7XG5pbXBvcnQge1RyYW5zbGF0aW9uQnVuZGxlfSBmcm9tICcuL3RyYW5zbGF0aW9uX2J1bmRsZSc7XG5cbmV4cG9ydCBjbGFzcyBJMThOSHRtbFBhcnNlciBpbXBsZW1lbnRzIEh0bWxQYXJzZXIge1xuICAvLyBAb3ZlcnJpZGVcbiAgZ2V0VGFnRGVmaW5pdGlvbjogYW55O1xuXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uQnVuZGxlOiBUcmFuc2xhdGlvbkJ1bmRsZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2h0bWxQYXJzZXI6IEh0bWxQYXJzZXIsIHRyYW5zbGF0aW9ucz86IHN0cmluZywgdHJhbnNsYXRpb25zRm9ybWF0Pzogc3RyaW5nLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lldhcm5pbmcsXG4gICAgICBjb25zb2xlPzogQ29uc29sZSkge1xuICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZXIgPSBjcmVhdGVTZXJpYWxpemVyKHRyYW5zbGF0aW9uc0Zvcm1hdCk7XG4gICAgICB0aGlzLl90cmFuc2xhdGlvbkJ1bmRsZSA9XG4gICAgICAgICAgVHJhbnNsYXRpb25CdW5kbGUubG9hZCh0cmFuc2xhdGlvbnMsICdpMThuJywgc2VyaWFsaXplciwgbWlzc2luZ1RyYW5zbGF0aW9uLCBjb25zb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJhbnNsYXRpb25CdW5kbGUgPVxuICAgICAgICAgIG5ldyBUcmFuc2xhdGlvbkJ1bmRsZSh7fSwgbnVsbCwgZGlnZXN0LCB1bmRlZmluZWQsIG1pc3NpbmdUcmFuc2xhdGlvbiwgY29uc29sZSk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2Uoc291cmNlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiBUb2tlbml6ZU9wdGlvbnMgPSB7fSk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgY29uc3QgaW50ZXJwb2xhdGlvbkNvbmZpZyA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbkNvbmZpZyB8fCBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHO1xuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gdGhpcy5faHRtbFBhcnNlci5wYXJzZShzb3VyY2UsIHVybCwge2ludGVycG9sYXRpb25Db25maWcsIC4uLm9wdGlvbnN9KTtcblxuICAgIGlmIChwYXJzZVJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChwYXJzZVJlc3VsdC5yb290Tm9kZXMsIHBhcnNlUmVzdWx0LmVycm9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlVHJhbnNsYXRpb25zKFxuICAgICAgICBwYXJzZVJlc3VsdC5yb290Tm9kZXMsIHRoaXMuX3RyYW5zbGF0aW9uQnVuZGxlLCBpbnRlcnBvbGF0aW9uQ29uZmlnLCBbXSwge30pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcmlhbGl6ZXIoZm9ybWF0Pzogc3RyaW5nKTogU2VyaWFsaXplciB7XG4gIGZvcm1hdCA9IChmb3JtYXQgfHwgJ3hsZicpLnRvTG93ZXJDYXNlKCk7XG5cbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlICd4bWInOlxuICAgICAgcmV0dXJuIG5ldyBYbWIoKTtcbiAgICBjYXNlICd4dGInOlxuICAgICAgcmV0dXJuIG5ldyBYdGIoKTtcbiAgICBjYXNlICd4bGlmZjInOlxuICAgIGNhc2UgJ3hsZjInOlxuICAgICAgcmV0dXJuIG5ldyBYbGlmZjIoKTtcbiAgICBjYXNlICd4bGlmZic6XG4gICAgY2FzZSAneGxmJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBYbGlmZigpO1xuICB9XG59XG4iXX0=