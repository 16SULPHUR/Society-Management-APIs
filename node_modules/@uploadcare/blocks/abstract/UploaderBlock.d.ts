export class UploaderBlock extends ActivityBlock {
    couldBeCtxOwner: boolean;
    isCtxOwner: boolean;
    init$: {
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
        '*blocksRegistry': Set<import("./Block.js").Block>;
        '*eventEmitter': import("../blocks/UploadCtxProvider/EventEmitter.js").EventEmitter | null;
    };
    /** @private */
    private __initialUploadMetadata;
    /** @private */
    private _validators;
    /**
     * This is Public JS API method. Could be called before block initialization, so we need to delay state interactions
     * until block init.
     *
     * TODO: If we add more public methods, it is better to use the single queue instead of tons of private fields per
     * each method. See https://github.com/uploadcare/blocks/pull/162/
     *
     * @deprecated Use `metadata` instance property on `lr-config` block instead.
     * @param {import('@uploadcare/upload-client').Metadata} metadata
     * @public
     */
    public setUploadMetadata(metadata: import('@uploadcare/upload-client').Metadata): void;
    get hasCtxOwner(): boolean;
    initCtxOwner(): void;
    /** @private */
    private _unobserveCollection;
    /** @private */
    private _unobserveCollectionProperties;
    /**
     * @param {string} url
     * @param {{ silent?: boolean; fileName?: string; source?: string }} [options]
     */
    addFileFromUrl(url: string, { silent, fileName, source }?: {
        silent?: boolean | undefined;
        fileName?: string | undefined;
        source?: string | undefined;
    } | undefined): void;
    /**
     * @param {string} uuid
     * @param {{ silent?: boolean; fileName?: string; source?: string }} [options]
     */
    addFileFromUuid(uuid: string, { silent, fileName, source }?: {
        silent?: boolean | undefined;
        fileName?: string | undefined;
        source?: string | undefined;
    } | undefined): void;
    /**
     * @param {File} file
     * @param {{ silent?: boolean; fileName?: string; source?: string; fullPath?: string }} [options]
     */
    addFileFromObject(file: File, { silent, fileName, source, fullPath }?: {
        silent?: boolean | undefined;
        fileName?: string | undefined;
        source?: string | undefined;
        fullPath?: string | undefined;
    } | undefined): void;
    /**
     * @deprecated Will be removed in the near future. Please use `addFileFromObject`, `addFileFromUrl` or
     *   `addFileFromUuid` instead.
     * @param {File[]} files
     */
    addFiles(files: File[]): void;
    uploadAll(): void;
    /** @param {{ captureCamera?: boolean }} options */
    openSystemDialog(options?: {
        captureCamera?: boolean;
    }): void;
    fileInput: HTMLInputElement | null | undefined;
    /** @type {string[]} */
    get sourceList(): string[];
    /** @param {Boolean} [force] */
    initFlow(force?: boolean | undefined): void;
    doneFlow(): void;
    /** @returns {TypedCollection} */
    get uploadCollection(): TypedCollection;
    /**
     * @private
     * @param {import('./TypedData.js').TypedData} entry
     */
    private _validateFileType;
    /**
     * @private
     * @param {import('./TypedData.js').TypedData} entry
     */
    private _validateMaxSizeLimit;
    /**
     * @private
     * @param {import('./TypedData.js').TypedData} entry
     */
    private _validateMultipleLimit;
    /**
     * @private
     * @param {import('./TypedData.js').TypedData} entry
     */
    private _validateIsImage;
    /**
     * @private
     * @param {import('./TypedData.js').TypedData} entry
     */
    private _runValidatorsForEntry;
    /** @private */
    private _debouncedRunValidators;
    /** @private */
    private _runValidators;
    /** @private */
    private _flushOutputItems;
    /**
     * @private
     * @type {Parameters<import('./TypedCollection.js').TypedCollection['observeCollection']>[0]}
     */
    private _handleCollectonUpdate;
    /**
     * @private
     * @param {Record<string, any>} changeMap
     */
    private _handleCollectionPropertiesUpdate;
    /** @private */
    private setInitialCrop;
    /**
     * @param {string} entryId
     * @protected
     */
    protected getMetadataFor(entryId: string): Promise<import("@uploadcare/upload-client").Metadata>;
    /** @returns {import('@uploadcare/upload-client').FileFromOptions} */
    getUploadClientOptions(): import('@uploadcare/upload-client').FileFromOptions;
    /**
     * @param {string} entryId
     * @returns {import('../types/exported.js').OutputFileEntry}
     */
    getOutputItem(entryId: string): import('../types/exported.js').OutputFileEntry;
    /**
     * @param {(item: import('./TypedData.js').TypedData) => Boolean} [checkFn]
     * @returns {import('../types/exported.js').OutputFileEntry[]}
     */
    getOutputData(checkFn?: ((item: import('./TypedData.js').TypedData) => boolean) | undefined): import('../types/exported.js').OutputFileEntry[];
}
export namespace UploaderBlock {
    type extSrcList = string;
    let extSrcList: Readonly<{
        FACEBOOK: "facebook";
        DROPBOX: "dropbox";
        GDRIVE: "gdrive";
        GPHOTOS: "gphotos";
        INSTAGRAM: "instagram";
        FLICKR: "flickr";
        VK: "vk";
        EVERNOTE: "evernote";
        BOX: "box";
        ONEDRIVE: "onedrive";
        HUDDLE: "huddle";
    }>;
    type sourceTypes = string;
    let sourceTypes: Readonly<{
        FACEBOOK: "facebook";
        DROPBOX: "dropbox";
        GDRIVE: "gdrive";
        GPHOTOS: "gphotos";
        INSTAGRAM: "instagram";
        FLICKR: "flickr";
        VK: "vk";
        EVERNOTE: "evernote";
        BOX: "box";
        ONEDRIVE: "onedrive";
        HUDDLE: "huddle";
        LOCAL: "local";
        URL: "url";
        CAMERA: "camera";
        DRAW: "draw";
    }>;
}
import { ActivityBlock } from './ActivityBlock.js';
import { TypedCollection } from './TypedCollection.js';
//# sourceMappingURL=UploaderBlock.d.ts.map