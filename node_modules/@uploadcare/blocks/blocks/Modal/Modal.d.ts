export class Modal extends Block {
    static StateConsumerScope: string;
    init$: {
        '*modalActive': boolean;
        isOpen: boolean;
        closeClicked: () => void;
        '*blocksRegistry': Set<Block>;
        '*eventEmitter': import("../UploadCtxProvider/EventEmitter.js").EventEmitter | null;
    };
    _handleBackdropClick: () => void;
    _closeDialog: () => void;
    _handleDialogClose: () => void;
    /** @param {Event} e */
    _handleDialogMouseDown: (e: Event) => void;
    /** @private */
    private _mouseDownTarget;
    /** @param {Event} e */
    _handleDialogMouseUp: (e: Event) => void;
    show(): void;
    hide(): void;
}
export namespace Modal {
    let template: string;
}
import { Block } from '../../abstract/Block.js';
//# sourceMappingURL=Modal.d.ts.map