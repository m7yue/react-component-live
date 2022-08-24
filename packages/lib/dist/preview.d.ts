import { FC, ComponentPropsWithoutRef } from "react";
import { LiveProviderProps } from "react-live";
export declare type PreviewProps = {
    code?: string;
    scope?: LiveProviderProps['scope'];
} & ComponentPropsWithoutRef<'div'>;
declare const Preview: FC<PreviewProps>;
export { Preview };
