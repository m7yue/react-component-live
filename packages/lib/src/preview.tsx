import React, { useContext, FC, ComponentPropsWithoutRef } from "react";
import { LiveProvider, LiveError, LivePreview, LiveProviderProps } from "react-live";

import { Context } from "./context-provider";

export type PreviewProps = {
  code?: string;
  scope?: LiveProviderProps['scope'];
} & ComponentPropsWithoutRef<'div'>

const Preview: FC<PreviewProps> = (props) => {
  const contextValue = useContext(Context);
  const {
    code,
    scope = contextValue.scope,
    ...restProps
  } = props

  return (
    <>
      <div {...restProps}>
      <LiveProvider scope={scope} language={"javascript"} code={code}>
        <LiveError />
        <LivePreview />
      </LiveProvider>
      </div>
    </>
  );
};

export { Preview };