import React, {useEffect, useMemo, useState} from 'react';
import {WebTableComponentsContext, WebTableContext} from "./WebTableContext";
import {WebTableView} from "../WebTableView";
import {TWebTableConnector} from "../types";
import {LineData} from "../../../types/DataInterfaces/Line";
import {TWebTableActionsContext, WebTableActionsContext} from "./WebTableActionsContext";

const WebTableContextComponent: React.FC<TWebTableConnector> = ({connector}) => {
    const [linesData, setLinesData] =
        useState<LineData<Object, typeof connector.cells>[]>([])
    const actionsContext: TWebTableActionsContext<typeof connector.cells> = useMemo(()=>({
        cellActions: connector.lineActions
    }),[])
    return (
        <WebTableContext.Provider
            value={{
                line: {linesData, setLinesData},
                cell: {defaultCells: connector.cells},
            }}
        >
            <WebTableComponentsContext.Provider
                value={{
                    Line: connector.CustomLine,
                    cellsStructure: connector.cells,
                    Shield: connector.customComponents.Shield,
                }}
            >
                <WebTableActionsContext.Provider value={actionsContext}>
                    <WebTableView connector={connector}/>
                </WebTableActionsContext.Provider>
            </WebTableComponentsContext.Provider>

        </WebTableContext.Provider>
    );
};

export {WebTableContextComponent};
