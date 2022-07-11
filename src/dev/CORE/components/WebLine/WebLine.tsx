import React from 'react';
import {WebTableLineApiContext} from "./webLineContext";
import {TCustomLine} from "../../types/API/TCustomLine";
import {UseWebLineService} from "./useWebLineService";

export type LineAction<Cells extends Object> = {
    subscribe: Array<keyof Cells>
    to: keyof Cells
    func: (cellData: Cells) => Cells
}

export type TWebLine = {
    Line: TCustomLine,
    cells: Object,
    actions?: LineAction<Object>[]
}
const WebLine: React.FC<TWebLine> = React.memo((props) => {
    const {setCellsData, cellsData} = UseWebLineService(props)
    return (
        <WebTableLineApiContext.Provider
            value={{
                cells: cellsData, lineInformation: {}, setCell: setCellsData
            }}
        >
            <props.Line />
        </WebTableLineApiContext.Provider>
    );
});

export {WebLine};
