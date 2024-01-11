export class LiveHtml extends Block {
    hl(): Promise<void>;
    sync(): void;
    _updTimeout: number | undefined;
    init$: any;
    /** @private */
    private __innerHtml;
    importmapHtml: string | undefined;
}
export namespace LiveHtml {
    let template: string;
}
import { Block } from '../../abstract/Block.js';
//# sourceMappingURL=LiveHtml.d.ts.map