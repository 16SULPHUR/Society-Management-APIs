export class UploadDetails extends UploaderBlock {
    activityType: "details";
    init$: any;
    showNonImageThumb(): void;
    /** @private */
    private _entrySubs;
    entry: import("../../abstract/TypedData.js").TypedData | undefined;
    /**
     * @private
     * @type {File}
     */
    private _file;
}
export namespace UploadDetails {
    let template: string;
}
import { UploaderBlock } from '../../abstract/UploaderBlock.js';
//# sourceMappingURL=UploadDetails.d.ts.map