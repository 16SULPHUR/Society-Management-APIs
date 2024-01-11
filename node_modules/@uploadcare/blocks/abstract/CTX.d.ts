export function blockCtx(): {
    /** @type {Set<import('./Block').Block>} */
    '*blocksRegistry': Set<import('./Block').Block>;
    /** @type {import('../blocks/UploadCtxProvider/EventEmitter.js').EventEmitter | null} */
    '*eventEmitter': import('../blocks/UploadCtxProvider/EventEmitter.js').EventEmitter | null;
};
export function activityBlockCtx(fnCtx: import('./Block').Block): {
    '*currentActivity': string;
    '*currentActivityParams': {};
    '*history': never[];
    '*historyBack': null;
    '*closeModal': () => void;
    /** @type {Set<import('./Block').Block>} */
    '*blocksRegistry': Set<import('./Block').Block>;
    /** @type {import('../blocks/UploadCtxProvider/EventEmitter.js').EventEmitter | null} */
    '*eventEmitter': import('../blocks/UploadCtxProvider/EventEmitter.js').EventEmitter | null;
};
export function uploaderBlockCtx(fnCtx: import('./Block').Block): {
    '*commonProgress': number;
    '*uploadList': never[];
    '*outputData': null;
    '*focusedEntry': null;
    '*uploadMetadata': null;
    '*uploadQueue': Queue;
    '*uploadCollection': null;
    '*currentActivity': string;
    '*currentActivityParams': {};
    '*history': never[];
    '*historyBack': null;
    '*closeModal': () => void;
    /** @type {Set<import('./Block').Block>} */
    '*blocksRegistry': Set<import('./Block').Block>;
    /** @type {import('../blocks/UploadCtxProvider/EventEmitter.js').EventEmitter | null} */
    '*eventEmitter': import('../blocks/UploadCtxProvider/EventEmitter.js').EventEmitter | null;
};
import { Queue } from '@uploadcare/upload-client';
//# sourceMappingURL=CTX.d.ts.map