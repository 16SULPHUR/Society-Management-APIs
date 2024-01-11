export type DataOutput = (new () => {
    addEventListener(type: 'lr-data-output', listener: (e: CustomEvent<{
        timestamp: number;
        ctxName: string;
        data: Output;
    }>) => void, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: 'lr-data-output', listener: (e: CustomEvent<{
        timestamp: number;
        ctxName: string;
        data: Output;
    }>) => void, options?: boolean | EventListenerOptions): void;
} & DataOutputClass) & Omit<typeof DataOutputClass, "new">;
/**
 * @typedef {import('../../utils/mixinClass.js').MixinClass<
 *   typeof DataOutputClass,
 *   {
 *     addEventListener(
 *       type: 'lr-data-output',
 *       listener: (
 *         e: CustomEvent<{
 *           timestamp: number;
 *           ctxName: string;
 *           data: Output;
 *         }>
 *       ) => void,
 *       options?: boolean | AddEventListenerOptions
 *     ): void;
 *     removeEventListener(
 *       type: 'lr-data-output',
 *       listener: (
 *         e: CustomEvent<{
 *           timestamp: number;
 *           ctxName: string;
 *           data: Output;
 *         }>
 *       ) => void,
 *       options?: boolean | EventListenerOptions
 *     ): void;
 *   }
 * >}
 *   DataOutput
 */
export const DataOutput: DataOutput;
/**
 * }
 */
export type Output = import('../../types/exported.js').OutputFileEntry[] | {
    groupData: import('@uploadcare/upload-client').GroupInfo;
    files: import('../../types/exported.js').OutputFileEntry[];
};
/**
 * @typedef {| import('../../types/exported.js').OutputFileEntry[]
 *   | {
 *       groupData: import('@uploadcare/upload-client').GroupInfo;
 *       files: import('../../types/exported.js').OutputFileEntry[];
 *     }} Output}
 */
declare class DataOutputClass extends UploaderBlock {
    init$: {
        output: null;
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
    get dict(): Readonly<{
        SRC_CTX_KEY: "*outputData";
        EVENT_NAME: "lr-data-output";
        FIRE_EVENT_ATTR: "use-event";
        CONSOLE_ATTR: "use-console";
        GROUP_ATTR: "use-group";
        FORM_INPUT_ATTR: "use-input";
        INPUT_NAME_ATTR: "input-name";
        INPUT_REQUIRED: "input-required";
    }>;
    get validationInput(): HTMLInputElement | undefined;
    _dynamicInputsContainer: HTMLDivElement | undefined;
    _validationInputElement: HTMLInputElement | undefined;
}
declare namespace DataOutputClass {
    let dict: Readonly<{
        SRC_CTX_KEY: "*outputData";
        EVENT_NAME: "lr-data-output";
        FIRE_EVENT_ATTR: "use-event";
        CONSOLE_ATTR: "use-console";
        GROUP_ATTR: "use-group";
        FORM_INPUT_ATTR: "use-input";
        INPUT_NAME_ATTR: "input-name";
        INPUT_REQUIRED: "input-required";
    }>;
}
import { UploaderBlock } from '../../abstract/UploaderBlock.js';
export {};
//# sourceMappingURL=DataOutput.d.ts.map