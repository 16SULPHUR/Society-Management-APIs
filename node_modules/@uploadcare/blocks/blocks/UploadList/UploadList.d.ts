/**
 * @typedef {{
 *   total: number;
 *   succeed: number;
 *   uploading: number;
 *   failed: number;
 *   limitOverflow: number;
 * }} Summary
 */
export class UploadList extends UploaderBlock {
    activityType: "upload-list";
    init$: {
        doneBtnVisible: boolean;
        doneBtnEnabled: boolean;
        uploadBtnVisible: boolean;
        addMoreBtnVisible: boolean;
        addMoreBtnEnabled: boolean;
        headerText: string;
        hasFiles: boolean;
        onAdd: () => void;
        onUpload: () => void;
        onDone: () => void;
        onCancel: () => void;
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
    _debouncedHandleCollectionUpdate: (() => void) & {
        cancel: () => void;
    };
    /**
     * @private
     * @returns {{ passed: Boolean; tooFew: Boolean; tooMany: Boolean; exact: Boolean; min: Number; max: Number }}
     */
    private _validateFilesCount;
    /** @private */
    private _updateCountLimitMessage;
    /** @private */
    private _updateUploadsState;
    /**
     * @private
     * @param {Summary} summary
     */
    private _getHeaderText;
}
export namespace UploadList {
    let template: string;
}
export type Summary = {
    total: number;
    succeed: number;
    uploading: number;
    failed: number;
    limitOverflow: number;
};
import { UploaderBlock } from '../../abstract/UploaderBlock.js';
//# sourceMappingURL=UploadList.d.ts.map