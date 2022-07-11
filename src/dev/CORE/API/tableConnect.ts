import {TCustomLine} from "../types/API/TCustomLine";
import {LineAction} from "../components/WebLine/WebLine";
import {TCustomShield} from "../types/API/TCustomShield";
import {TableConnector} from "../components/WebTable/types";
import {useMemo, useState} from "react";
import {LineData} from "../types/DataInterfaces/Line";

export const useTableConnect = <Cells extends object, Line extends object>(props: TUseTableConnector<Cells>) => {
    const [tableState, setTableStateToExternal] = useState< LineData<Cells, Line>[]>([])
    const tableConnector: TableConnector<Cells, Line> = useMemo(()=>({
        customComponents: {
            Shield: props.CustomShield
        },
        api:{
            setTableStateToExternal: setTableStateToExternal
        },
        CustomLine: props.CustomLine,
        cells: props.cells,
        lineActions: props.lineActions,
    }),[])
    return {
        tableConnector: tableConnector,
        api: {
            tableState
        },
    }
}

export type TUseTableConnector<Cells> = {
    CustomLine: TCustomLine
    CustomShield: TCustomShield<Cells>
    cells: Cells
    lineActions?: LineAction<Cells>[]
}
