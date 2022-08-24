import React, { ComponentPropsWithRef } from "react";
import * as monaco from "monaco-editor";
import { type editor } from "monaco-editor";
import "./userWorker";
export declare type MonacoEditorProps = {
    defaultValue?: string;
    theme?: monaco.editor.IStandaloneThemeData;
    editorOptions?: editor.IStandaloneEditorConstructionOptions;
} & ComponentPropsWithRef<'div'>;
export declare const MonacoEditor: React.ForwardRefExoticComponent<Pick<MonacoEditorProps, "key" | "theme" | keyof React.HTMLAttributes<HTMLDivElement> | "editorOptions"> & React.RefAttributes<{
    readonly editor: editor.IStandaloneCodeEditor;
}>>;
