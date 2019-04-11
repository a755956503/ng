/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// We have to do a little dance to get the ng1 injector into the module injector.
// We store the ng1 injector so that the provider in the module injector can access it
// Then we "get" the ng1 injector from the module injector, which triggers the provider to read
// the stored injector and release the reference to it.
/** @type {?} */
let tempInjectorRef = null;
/**
 * @param {?} injector
 * @return {?}
 */
export function setTempInjectorRef(injector) {
    tempInjectorRef = injector;
}
/**
 * @return {?}
 */
export function injectorFactory() {
    if (!tempInjectorRef) {
        throw new Error('Trying to get the AngularJS injector before it being set.');
    }
    /** @type {?} */
    const injector = tempInjectorRef;
    tempInjectorRef = null; // clear the value to prevent memory leaks
    return injector;
}
/**
 * @param {?} i
 * @return {?}
 */
export function rootScopeFactory(i) {
    return i.get('$rootScope');
}
/**
 * @param {?} i
 * @return {?}
 */
export function compileFactory(i) {
    return i.get('$compile');
}
/**
 * @param {?} i
 * @return {?}
 */
export function parseFactory(i) {
    return i.get('$parse');
}
/** @type {?} */
export const angular1Providers = [
    // We must use exported named functions for the ng2 factories to keep the compiler happy:
    // > Metadata collected contains an error that will be reported at runtime:
    // >   Function calls are not supported.
    // >   Consider replacing the function or lambda with a reference to an exported function
    { provide: '$injector', useFactory: injectorFactory, deps: [] },
    { provide: '$rootScope', useFactory: rootScopeFactory, deps: ['$injector'] },
    { provide: '$compile', useFactory: compileFactory, deps: ['$injector'] },
    { provide: '$parse', useFactory: parseFactory, deps: ['$injector'] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjFfcHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXBncmFkZS9zdGF0aWMvc3JjL2FuZ3VsYXIxX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBY0ksZUFBZSxHQUFrQyxJQUFJOzs7OztBQUN6RCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsUUFBa0M7SUFDbkUsZUFBZSxHQUFHLFFBQVEsQ0FBQztBQUM3QixDQUFDOzs7O0FBQ0QsTUFBTSxVQUFVLGVBQWU7SUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRTtRQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7S0FDOUU7O1VBRUssUUFBUSxHQUE2QixlQUFlO0lBQzFELGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBRSwwQ0FBMEM7SUFDbkUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsQ0FBMkI7SUFDMUQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxDQUEyQjtJQUN4RCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0IsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLENBQTJCO0lBQ3RELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QixDQUFDOztBQUVELE1BQU0sT0FBTyxpQkFBaUIsR0FBRztJQUMvQix5RkFBeUY7SUFDekYsMkVBQTJFO0lBQzNFLHdDQUF3QztJQUN4Qyx5RkFBeUY7SUFDekYsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztJQUM3RCxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFDO0lBQzFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFDO0lBQ3RFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFDO0NBQ25FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJy4uLy4uL3NyYy9jb21tb24vc3JjL2FuZ3VsYXIxJztcblxuLy8gV2UgaGF2ZSB0byBkbyBhIGxpdHRsZSBkYW5jZSB0byBnZXQgdGhlIG5nMSBpbmplY3RvciBpbnRvIHRoZSBtb2R1bGUgaW5qZWN0b3IuXG4vLyBXZSBzdG9yZSB0aGUgbmcxIGluamVjdG9yIHNvIHRoYXQgdGhlIHByb3ZpZGVyIGluIHRoZSBtb2R1bGUgaW5qZWN0b3IgY2FuIGFjY2VzcyBpdFxuLy8gVGhlbiB3ZSBcImdldFwiIHRoZSBuZzEgaW5qZWN0b3IgZnJvbSB0aGUgbW9kdWxlIGluamVjdG9yLCB3aGljaCB0cmlnZ2VycyB0aGUgcHJvdmlkZXIgdG8gcmVhZFxuLy8gdGhlIHN0b3JlZCBpbmplY3RvciBhbmQgcmVsZWFzZSB0aGUgcmVmZXJlbmNlIHRvIGl0LlxubGV0IHRlbXBJbmplY3RvclJlZjogYW5ndWxhci5JSW5qZWN0b3JTZXJ2aWNlfG51bGwgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRlbXBJbmplY3RvclJlZihpbmplY3RvcjogYW5ndWxhci5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gIHRlbXBJbmplY3RvclJlZiA9IGluamVjdG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdG9yRmFjdG9yeSgpIHtcbiAgaWYgKCF0ZW1wSW5qZWN0b3JSZWYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBnZXQgdGhlIEFuZ3VsYXJKUyBpbmplY3RvciBiZWZvcmUgaXQgYmVpbmcgc2V0LicpO1xuICB9XG5cbiAgY29uc3QgaW5qZWN0b3I6IGFuZ3VsYXIuSUluamVjdG9yU2VydmljZSA9IHRlbXBJbmplY3RvclJlZjtcbiAgdGVtcEluamVjdG9yUmVmID0gbnVsbDsgIC8vIGNsZWFyIHRoZSB2YWx1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICByZXR1cm4gaW5qZWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb290U2NvcGVGYWN0b3J5KGk6IGFuZ3VsYXIuSUluamVjdG9yU2VydmljZSkge1xuICByZXR1cm4gaS5nZXQoJyRyb290U2NvcGUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVGYWN0b3J5KGk6IGFuZ3VsYXIuSUluamVjdG9yU2VydmljZSkge1xuICByZXR1cm4gaS5nZXQoJyRjb21waWxlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZhY3RvcnkoaTogYW5ndWxhci5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gIHJldHVybiBpLmdldCgnJHBhcnNlJyk7XG59XG5cbmV4cG9ydCBjb25zdCBhbmd1bGFyMVByb3ZpZGVycyA9IFtcbiAgLy8gV2UgbXVzdCB1c2UgZXhwb3J0ZWQgbmFtZWQgZnVuY3Rpb25zIGZvciB0aGUgbmcyIGZhY3RvcmllcyB0byBrZWVwIHRoZSBjb21waWxlciBoYXBweTpcbiAgLy8gPiBNZXRhZGF0YSBjb2xsZWN0ZWQgY29udGFpbnMgYW4gZXJyb3IgdGhhdCB3aWxsIGJlIHJlcG9ydGVkIGF0IHJ1bnRpbWU6XG4gIC8vID4gICBGdW5jdGlvbiBjYWxscyBhcmUgbm90IHN1cHBvcnRlZC5cbiAgLy8gPiAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGUgZnVuY3Rpb24gb3IgbGFtYmRhIHdpdGggYSByZWZlcmVuY2UgdG8gYW4gZXhwb3J0ZWQgZnVuY3Rpb25cbiAge3Byb3ZpZGU6ICckaW5qZWN0b3InLCB1c2VGYWN0b3J5OiBpbmplY3RvckZhY3RvcnksIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6ICckcm9vdFNjb3BlJywgdXNlRmFjdG9yeTogcm9vdFNjb3BlRmFjdG9yeSwgZGVwczogWyckaW5qZWN0b3InXX0sXG4gIHtwcm92aWRlOiAnJGNvbXBpbGUnLCB1c2VGYWN0b3J5OiBjb21waWxlRmFjdG9yeSwgZGVwczogWyckaW5qZWN0b3InXX0sXG4gIHtwcm92aWRlOiAnJHBhcnNlJywgdXNlRmFjdG9yeTogcGFyc2VGYWN0b3J5LCBkZXBzOiBbJyRpbmplY3RvciddfVxuXTtcbiJdfQ==