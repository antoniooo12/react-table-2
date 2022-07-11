import React from "react";
import {TCustomLine} from "../../../types/API/TCustomLine";
import {TCustomShield} from "../../../types/API/TCustomShield";
import {LineData} from "../../../types/DataInterfaces/Line";

export type TWebTableContext<Cell, Line> = {
    line: {
        linesData: LineData<Cell, Line>[],
        setLinesData: React.Dispatch<React.SetStateAction<LineData<Cell, Line>[]>>,
    }
    cell: {
        defaultCells: Object
    }
}
export const WebTableContext =
    React.createContext<TWebTableContext<Object, Object>>({} as TWebTableContext<Object, Object>)

export const useWebTableContext = () => {
    return React.useContext(WebTableContext)
}
export type TWebTableCustomComponentsContext = {
    cellsStructure: Object,
    Line: TCustomLine,
    Shield: TCustomShield<object>,
}
export const WebTableComponentsContext =
    React.createContext<TWebTableCustomComponentsContext>({} as TWebTableCustomComponentsContext)

export const useWebTableComponentsContext = () => {
    return React.useContext(WebTableComponentsContext)
}
