import React, { useMemo } from "react";
import { LiveProviderProps } from "react-live";
import * as monaco from "monaco-editor";

import TomorrowNightBlue from "monaco-themes/themes/Tomorrow-Night-Blue.json";

export type ContextValue = {
  scope: LiveProviderProps["scope"];
  theme: monaco.editor.IStandaloneThemeData;
  children?: React.ReactNode;
};

const defaultContextValue = {
  scope: {},
  theme: TomorrowNightBlue as monaco.editor.IStandaloneThemeData,
};

export const Context = React.createContext<ContextValue>(defaultContextValue);

export type ContextProviderProps = {
  scope?: LiveProviderProps["scope"];
  theme?: monaco.editor.IStandaloneThemeData;
  children?: React.ReactNode;
};

const ContextProvider = (props: ContextProviderProps) => {
  const { theme, scope } = props;

  const contextValue = useMemo<ContextValue>(() => {
    return {
      scope: scope || defaultContextValue.scope,
      theme: theme || defaultContextValue.theme,
    };
  }, [scope, theme]);

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export { ContextProvider };
