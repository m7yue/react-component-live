import { FC } from "react";
import { LiveProviderProps } from "react-live";
export declare type PreviewProps = {
    code?: string;
    scope?: LiveProviderProps['scope'];
};
declare const Preview: FC<PreviewProps>;
export { Preview };
