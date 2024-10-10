import type {
    LoaderFunction,
    LoaderFunctionArgs as BaseLoaderFunctionArgs,
    Params,
} from "react-router-dom";

export type LoaderData<T extends LoaderFunction> = Awaited<ReturnType<T>>;

export type LoaderFunctionArgs<Key extends string = string> =
    BaseLoaderFunctionArgs & {
        params: Params<Key>;
    };
