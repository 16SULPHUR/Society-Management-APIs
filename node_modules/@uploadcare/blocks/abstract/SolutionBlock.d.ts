export class SolutionBlock extends ShadowWrapper {
    static set template(arg: any);
    static get template(): any;
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
    _template: null;
}
import { ShadowWrapper } from '../blocks/ShadowWrapper/ShadowWrapper.js';
//# sourceMappingURL=SolutionBlock.d.ts.map