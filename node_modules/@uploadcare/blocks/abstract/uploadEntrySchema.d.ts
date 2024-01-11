/**
 * @typedef {Object} UploadEntry
 * @property {File} file
 * @property {String} externalUrl
 * @property {String} fileName
 * @property {number} fileSize
 * @property {number} lastModified
 * @property {number} uploadProgress
 * @property {String} uuid
 * @property {Boolean} isImage
 * @property {String} mimeType
 * @property {Error} uploadError
 * @property {String} validationErrorMsg
 * @property {String} ctxName
 * @property {String} cdnUrl
 * @property {String} cdnUrlModifiers
 * @property {UploadcareFile} fileInfo
 * @property {Boolean} isUploading
 * @property {String} thumbUrl
 * @property {Boolean} silentUpload
 */
/**
 * @template {keyof UploadEntry} K
 * @type {Record<K, { type: Function; value: any; nullable?: Boolean }>}
 */
export const uploadEntrySchema: Record<K, {
    type: Function;
    value: any;
    nullable?: boolean;
}>;
export type UploadEntry = {
    file: File;
    externalUrl: string;
    fileName: string;
    fileSize: number;
    lastModified: number;
    uploadProgress: number;
    uuid: string;
    isImage: boolean;
    mimeType: string;
    uploadError: Error;
    validationErrorMsg: string;
    ctxName: string;
    cdnUrl: string;
    cdnUrlModifiers: string;
    fileInfo: UploadcareFile;
    isUploading: boolean;
    thumbUrl: string;
    silentUpload: boolean;
};
import { UploadcareFile } from '@uploadcare/upload-client';
//# sourceMappingURL=uploadEntrySchema.d.ts.map