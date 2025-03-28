import type {
    LoaderFunctionArgs as BaseLoaderFunctionArgs,
    Params,
} from "react-router-dom";

export type LoaderFunctionArgs<Key extends string = string> =
    BaseLoaderFunctionArgs & {
        params: Params<Key>;
    };
