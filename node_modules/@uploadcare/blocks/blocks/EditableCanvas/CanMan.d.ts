export class CanMan {
    /** @param {import('./EditableCanvas.js').RefMap} refMap */
    constructor(refMap: import('./EditableCanvas.js').RefMap);
    _syncSvgSize(): void;
    _syncCanvas(): Promise<any>;
    _backSyncSvg(): Promise<any>;
    _syncAll(): Promise<void>;
    /** @type {HTMLCanvasElement} */
    can: HTMLCanvasElement;
    /** @type {SVGElement} */
    svgEl: SVGElement;
    svgGroupEl: SVGElement;
    svgImgEl: SVGImageElement;
    vImg: HTMLImageElement;
    ctx: CanvasRenderingContext2D;
    currentColor: string;
    _addedObjects: Set<any>;
    applyCss(cssMap: any): void;
    getImg(): Promise<any>;
    rotate(): void;
    /** @param {'vertical' | 'horizontal'} type */
    flip(type: 'vertical' | 'horizontal'): void;
    brightness(val: any): void;
    contrast(val: any): void;
    saturate(val: any): void;
    setColor(val: any): void;
    startText(): void;
    stopText(): void;
    startDraw(): void;
    /** @param {Boolean} val */
    removeMode(val: boolean): void;
    resize(): void;
    crop(): void;
    bake(): void;
    restore(): void;
}
export namespace CanMan {
    let defaultColor: string;
}
//# sourceMappingURL=CanMan.d.ts.map