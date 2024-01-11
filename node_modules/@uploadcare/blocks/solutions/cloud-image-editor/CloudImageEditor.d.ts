declare const CloudImageEditor_base: import("../../utils/mixinClass.js").MixinClass<typeof CloudImageEditorBlock, {
    shadowReadyCallback(): void;
}>;
export class CloudImageEditor extends CloudImageEditor_base {
    /** @private */
    private __shadowReady;
}
import { CloudImageEditorBlock } from '../../blocks/CloudImageEditor/src/CloudImageEditorBlock.js';
export {};
//# sourceMappingURL=CloudImageEditor.d.ts.map