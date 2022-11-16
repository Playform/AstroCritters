import type { Options as CrittersOptions } from "@nikolarhristov/critters";
export type filterFn = (file: string) => boolean;
export interface Options {
    [key: string]: any;
    path?: string | string[] | Set<string>;
    exclude?: string | RegExp | filterFn | string[] | RegExp[] | filterFn[] | Set<string> | Set<RegExp> | Set<filterFn>;
    critters?: boolean | CrittersOptions;
    logger?: number;
}
declare const options: Options;
export default options;
