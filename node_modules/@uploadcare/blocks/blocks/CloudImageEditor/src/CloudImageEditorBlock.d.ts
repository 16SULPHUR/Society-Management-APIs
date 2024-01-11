export class CloudImageEditorBlock extends CloudImageEditorBase {
    init$: {
        '*originalUrl': null;
        '*faderEl': null;
        '*cropperEl': null;
        '*imgEl': null;
        '*imgContainerEl': null;
        '*networkProblems': boolean;
        '*imageSize': null;
        '*editorTransformations': import("./types.js").Transformations;
        '*cropPresetList': import("./types.js").CropPresetList;
        '*tabList': ("crop" | "tuning" | "filters")[];
        '*tabId': "crop";
        entry: null;
        extension: null;
        editorMode: boolean;
        modalCaption: string;
        isImage: boolean;
        msg: string;
        src: string;
        fileType: string;
        showLoader: boolean;
        uuid: null;
        cdnUrl: null;
        cropPreset: string;
        tabs: string;
        'presence.networkProblems': boolean;
        'presence.modalCaption': boolean;
        'presence.editorToolbar': boolean;
        'presence.viewerToolbar': boolean;
        '*on.retryNetwork': () => void;
        '*on.apply': (transformations: import("./types.js").Transformations) => void;
        '*on.cancel': () => void;
        '*blocksRegistry': Set<import("../../../index.js").Block>;
        '*eventEmitter': import("../../UploadCtxProvider/EventEmitter.js").EventEmitter | null;
    };
    /** @private */
    private _debouncedShowLoader;
    /**
     * @private
     * @param {boolean} show
     */
    private _showLoader;
    /**
     * To proper work, we need non-zero size the element. So, we'll wait for it.
     *
     * @private
     * @returns {Promise<void>}
     */
    private _waitForSize;
    updateImage(): Promise<void>;
    initEditor(): Promise<void>;
    _imgLoading: boolean | undefined;
}
export namespace CloudImageEditorBlock {
    export { TEMPLATE as template };
}
import { CloudImageEditorBase } from './CloudImageEditorBase.js';
import { TEMPLATE } from './template.js';
//# sourceMappingURL=CloudImageEditorBlock.d.ts.map