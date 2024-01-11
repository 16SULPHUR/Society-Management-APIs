export class EditorToolbar extends Block {
    get actionsMap(): {
        fullscreen: () => void;
        rotate_cw: () => void;
        flip_v: () => void;
        flip_h: () => void;
        brightness: () => void;
        contrast: () => void;
        saturation: () => void;
        resize: () => void;
        crop: () => void;
        color: () => void;
        text: () => void;
        draw: () => void;
        cancel: () => void;
    };
    rangeCtx: string | null | undefined;
    init$: any;
    buttons: Set<any>;
    /** @type {import('./EditableCanvas.js').EditableCanvas} */
    editor: import('./EditableCanvas.js').EditableCanvas;
    rMap: import("./EditableCanvas.js").RefMap | undefined;
    /** @type {CanMan} */
    canMan: CanMan | undefined;
}
export namespace EditorToolbar {
    let template: string;
}
import { Block } from '../../abstract/Block.js';
import { CanMan } from './CanMan.js';
//# sourceMappingURL=EditableCanvasToolbar.d.ts.map