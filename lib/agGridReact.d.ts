/// <reference types="react" />
import * as React from "react";
import { Component } from "react";
import * as AgGrid from "ag-grid";
import { GridOptions } from "ag-grid";
export interface AgGridReactProps extends GridOptions {
    gridOptions?: GridOptions;
    containerStyle?: React.CSSProperties;
}
export declare class AgGridReact extends Component<AgGridReactProps> {
    static propTypes: {
        gridOptions: any;
    };
    gridOptions: AgGrid.GridOptions;
    api: AgGrid.GridApi;
    columnApi: AgGrid.ColumnApi;
    protected eGridDiv: HTMLElement;
    render(): any;
    createStyleForDiv(): any;
    componentDidMount(): void;
    shouldComponentUpdate(): boolean;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    static unwrapStringOrNumber(obj: any): any;
    copy(value: any): any;
    areEquivalent(a: any, b: any): boolean;
    static areEquivalent(a: any, b: any): boolean;
}
