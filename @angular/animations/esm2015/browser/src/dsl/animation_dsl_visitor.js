/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AnimationDslVisitor() { }
if (false) {
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitTrigger = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitState = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitTransition = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitSequence = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitGroup = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitAnimate = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitStyle = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitKeyframes = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitReference = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitAnimateChild = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitAnimateRef = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitQuery = function (node, context) { };
    /**
     * @param {?} node
     * @param {?} context
     * @return {?}
     */
    AnimationDslVisitor.prototype.visitStagger = function (node, context) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX2RzbF92aXNpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9kc2wvYW5pbWF0aW9uX2RzbF92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTQSx5Q0FjQzs7Ozs7OztJQWJDLDBFQUFnRTs7Ozs7O0lBQ2hFLHdFQUE0RDs7Ozs7O0lBQzVELDZFQUFzRTs7Ozs7O0lBQ3RFLDJFQUFrRTs7Ozs7O0lBQ2xFLHdFQUE0RDs7Ozs7O0lBQzVELDBFQUFnRTs7Ozs7O0lBQ2hFLHdFQUE0RDs7Ozs7O0lBQzVELDRFQUE0RTs7Ozs7O0lBQzVFLDRFQUFvRTs7Ozs7O0lBQ3BFLCtFQUEwRTs7Ozs7O0lBQzFFLDZFQUFzRTs7Ozs7O0lBQ3RFLHdFQUE0RDs7Ozs7O0lBQzVELDBFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QW5pbWF0aW9uQW5pbWF0ZUNoaWxkTWV0YWRhdGEsIEFuaW1hdGlvbkFuaW1hdGVNZXRhZGF0YSwgQW5pbWF0aW9uQW5pbWF0ZVJlZk1ldGFkYXRhLCBBbmltYXRpb25Hcm91cE1ldGFkYXRhLCBBbmltYXRpb25LZXlmcmFtZXNTZXF1ZW5jZU1ldGFkYXRhLCBBbmltYXRpb25NZXRhZGF0YSwgQW5pbWF0aW9uUXVlcnlNZXRhZGF0YSwgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsIEFuaW1hdGlvblNlcXVlbmNlTWV0YWRhdGEsIEFuaW1hdGlvblN0YWdnZXJNZXRhZGF0YSwgQW5pbWF0aW9uU3RhdGVNZXRhZGF0YSwgQW5pbWF0aW9uU3R5bGVNZXRhZGF0YSwgQW5pbWF0aW9uVHJhbnNpdGlvbk1ldGFkYXRhLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbkRzbFZpc2l0b3Ige1xuICB2aXNpdFRyaWdnZXIobm9kZTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U3RhdGUobm9kZTogQW5pbWF0aW9uU3RhdGVNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFRyYW5zaXRpb24obm9kZTogQW5pbWF0aW9uVHJhbnNpdGlvbk1ldGFkYXRhLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U2VxdWVuY2Uobm9kZTogQW5pbWF0aW9uU2VxdWVuY2VNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEdyb3VwKG5vZGU6IEFuaW1hdGlvbkdyb3VwTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRBbmltYXRlKG5vZGU6IEFuaW1hdGlvbkFuaW1hdGVNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFN0eWxlKG5vZGU6IEFuaW1hdGlvblN0eWxlTWV0YWRhdGEsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXlmcmFtZXMobm9kZTogQW5pbWF0aW9uS2V5ZnJhbWVzU2VxdWVuY2VNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFJlZmVyZW5jZShub2RlOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEFuaW1hdGVDaGlsZChub2RlOiBBbmltYXRpb25BbmltYXRlQ2hpbGRNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEFuaW1hdGVSZWYobm9kZTogQW5pbWF0aW9uQW5pbWF0ZVJlZk1ldGFkYXRhLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UXVlcnkobm9kZTogQW5pbWF0aW9uUXVlcnlNZXRhZGF0YSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFN0YWdnZXIobm9kZTogQW5pbWF0aW9uU3RhZ2dlck1ldGFkYXRhLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG4iXX0=