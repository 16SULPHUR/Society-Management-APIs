export class DropArea extends UploaderBlock {
    init$: {
        state: number;
        withIcon: boolean;
        isClickable: boolean;
        isFullscreen: boolean;
        isEnabled: boolean;
        isVisible: boolean;
        text: string;
        "lr-drop-area/registry": null;
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
    isActive(): boolean;
    /** @private */
    private _destroyDropzone;
    _destroyContentWrapperDropzone: (() => void) | undefined;
    _onAreaClicked: (() => void) | undefined;
    /**
     * Ignore drop events if there are other visible drop areas on the page
     *
     * @private
     * @returns {Boolean}
     */
    private _shouldIgnore;
    /** @private */
    private _couldHandleFiles;
}
export namespace DropArea {
    let template: string;
}
import { UploaderBlock } from '../../abstract/UploaderBlock.js';
//# sourceMappingURL=DropArea.d.ts.map