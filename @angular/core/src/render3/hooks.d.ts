/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TNode } from './interfaces/node';
import { HookData, LView, TView } from './interfaces/view';
/**
 * If this is the first template pass, any ngOnInit or ngDoCheck hooks will be queued into
 * TView.initHooks during directiveCreate.
 *
 * The directive index and hook type are encoded into one number (1st bit: type, remaining bits:
 * directive index), then saved in the even indices of the initHooks array. The odd indices
 * hold the hook functions themselves.
 *
 * @param index The index of the directive in LView
 * @param hooks The static hooks map on the directive def
 * @param tView The current TView
 */
export declare function queueInitHooks(index: number, onInit: (() => void) | null, doCheck: (() => void) | null, tView: TView): void;
/**
 * Loops through the directives on a node and queues all their hooks except ngOnInit
 * and ngDoCheck, which are queued separately in directiveCreate.
 */
export declare function queueLifecycleHooks(tView: TView, tNode: TNode): void;
/**
 * Calls onInit and doCheck calls if they haven't already been called.
 *
 * @param currentView The current view
 */
export declare function executeInitHooks(currentView: LView, tView: TView, checkNoChangesMode: boolean): void;
/**
 * Iterates over afterViewInit and afterViewChecked functions and calls them.
 *
 * @param currentView The current view
 */
export declare function executeHooks(currentView: LView, allHooks: HookData | null, checkHooks: HookData | null, checkNoChangesMode: boolean): void;
/**
 * Calls lifecycle hooks with their contexts, skipping init hooks if it's not
 * the first LView pass.
 *
 * @param currentView The current view
 * @param arr The array in which the hooks are found
 */
export declare function callHooks(currentView: any[], arr: HookData): void;
