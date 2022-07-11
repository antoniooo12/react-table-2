import {TCustomLine} from "../../types/API/TCustomLine";
import {LineAction} from "../WebLine/WebLine";
import {TCustomShield} from "../../types/API/TCustomShield";
import {LineData} from "../../types/DataInterfaces/Line";

export type TableConnector<Cells extends object, Line extends object> = {
    CustomLine: TCustomLine
    customComponents: {
        Shield: TCustomShield<Cells>,
    },
    api:{
        setTableStateToExternal:  React.Dispatch<React.SetStateAction<LineData<Cells, Line>[]>>
    }
    cells: Cells
    lineActions?: LineAction<any>[]
}
export type TWebTableConnector = {
    connector: TableConnector<any,object>
}
