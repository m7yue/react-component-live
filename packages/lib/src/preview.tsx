import React, { useContext, FC } from "react";
import { LiveProvider, LiveError, LivePreview, LiveProviderProps } from "react-live";

import { Context } from "./context-provider";

export type PreviewProps = {
  code?: string;
  scope?: LiveProviderProps['scope'];
}

const Preview: FC<PreviewProps> = (props) => {
  const contextValue = useContext(Context);
  const {
    code,
    scope = contextValue.scope
  } = props

  return (
    <>
      <LiveProvider scope={scope} language={"javascript"} code={code}>
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </>
  );
};

export { Preview };