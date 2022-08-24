import React, { ComponentPropsWithRef, ComponentPropsWithoutRef, FC } from 'react';
import { LiveProviderProps } from 'react-live';
import * as monaco from 'monaco-editor';
import { editor } from 'monaco-editor';

declare type ContextValue = {
    scope: LiveProviderProps["scope"];
    theme: monaco.editor.IStandaloneThemeData;
    children?: React.ReactNode;
};
declare const Context: React.Context<ContextValue>;
declare type ContextProviderProps = {
    scope?: LiveProviderProps["scope"];
    theme?: monaco.editor.IStandaloneThemeData;
    children?: React.ReactNode;
};
declare const ContextProvider: (props: ContextProviderProps) => JSX.Element;

declare type MonacoEditorProps = {
    defaultValue?: string;
    theme?: monaco.editor.IStandaloneThemeData;
    editorOptions?: editor.IStandaloneEditorConstructionOptions;
} & ComponentPropsWithRef<'div'>;
declare const MonacoEditor: React.ForwardRefExoticComponent<Pick<MonacoEditorProps, "key" | "theme" | keyof React.HTMLAttributes<HTMLDivElement> | "editorOptions"> & React.RefAttributes<{
    readonly editor: editor.IStandaloneCodeEditor;
}>>;

declare type PreviewProps = {
    code?: string;
    scope?: LiveProviderProps['scope'];
} & ComponentPropsWithoutRef<'div'>;
declare const Preview: FC<PreviewProps>;

declare type LiveProps = {
    defaultValue?: string;
};
declare const ReactComponentLive: FC<LiveProps>;

export { Context, ContextProvider, ContextProviderProps, ContextValue, MonacoEditor, MonacoEditorProps, Preview, PreviewProps, ReactComponentLive };
