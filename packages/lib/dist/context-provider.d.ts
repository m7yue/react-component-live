import React from "react";
import { LiveProviderProps } from "react-live";
import * as monaco from "monaco-editor";
export declare type ContextValue = {
    scope: LiveProviderProps["scope"];
    theme: monaco.editor.IStandaloneThemeData;
    children?: React.ReactNode;
};
export declare const Context: React.Context<ContextValue>;
export declare type ContextProviderProps = {
    scope?: LiveProviderProps["scope"];
    theme?: monaco.editor.IStandaloneThemeData;
    children?: React.ReactNode;
};
declare const ContextProvider: (props: ContextProviderProps) => JSX.Element;
export { ContextProvider };
