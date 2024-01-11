/** @template [T=void] Default is `void` */
export function withResolvers<T = void>(): {
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason: unknown) => void;
    promise: Promise<T>;
};
//# sourceMappingURL=withResolvers.d.ts.map