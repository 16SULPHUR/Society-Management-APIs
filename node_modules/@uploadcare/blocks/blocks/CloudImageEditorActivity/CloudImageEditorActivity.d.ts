export class CloudImageEditorActivity extends UploaderBlock {
    activityType: "cloud-image-edit";
    init$: {
        cdnUrl: null;
        '*commonProgress': number;
        '*uploadList': never[];
        '*outputData': null;
        '*focusedEntry': null;
        '*uploadMetadata': null;
        '*uploadQueue': import("@uploadcare/upload-client").Queue;
        '*uploadCollection': null;
        '*currentActivity': string;
        '*currentActivityParams': {};
        '*history': never[];
        '*historyBack': null;
        '*closeModal': () => void;
        '*blocksRegistry': Set<import("../../index.js").Block>;
        '*eventEmitter': import("../UploadCtxProvider/EventEmitter.js").EventEmitter | null;
    };
    entry: import("../../abstract/TypedData.js").TypedData | undefined;
    /** @param {CustomEvent<import('../CloudImageEditor/src/types.js').ApplyResult>} e */
    handleApply(e: CustomEvent<import('../CloudImageEditor/src/types.js').ApplyResult>): void;
    handleCancel(): void;
    mountEditor(): void;
    _mounted: boolean | undefined;
    /** @private */
    private _instance;
    unmountEditor(): void;
}
import { UploaderBlock } from '../../abstract/UploaderBlock.js';
//# sourceMappingURL=CloudImageEditorActivity.d.ts.map