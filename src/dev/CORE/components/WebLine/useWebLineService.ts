import React, {useRef, useState} from "react";
import {LineAction} from "./WebLine";
import {TCustomLine} from "../../types/API/TCustomLine";
import {useWebTableActionsContext} from "../WebTable/contextes/WebTableActionsContext";

const setterActions = <Cell extends object>({actions, cellsDataExecuted, cellsDataFromState}: {
    cellsDataExecuted: Cell,
    cellsDataFromState: Cell,
    actions?: LineAction<Cell>[],
}) => {
    let cellsDataRef: Cell | undefined = cellsDataFromState
    let state: Cell = cellsDataExecuted
    console.log('++')
    console.log(actions)
    actions?.forEach(({to, subscribe, func}) => {
        const isChanged = cellsDataRef ? subscribe.some(cell => {
            if (cellsDataRef && cellsDataRef[cell] !== cellsDataExecuted[cell]) {
                return true
            }
        }) : false
        console.log(isChanged)
        if (isChanged) {
            state = func(cellsDataExecuted)
        }
    })
    return state
}
type TUseWebLineService<T extends Object> = {
    Line: TCustomLine,
    cells: T,
    actions?: LineAction<T>[]
}
export type FCellDataFromCel<Cells> = (cellSetter: (prev: Cells) => Cells) => void
const setCellsDataFabric =
    <Cell extends Object>(
        setCell: React.Dispatch<React.SetStateAction<Cell>>,
        cellData: Cell,
        actions: LineAction<Cell>[] | undefined,
    ) => (cellSetter: (prev: Cell) => Cell) => {
        const dataExecutedByCell = cellSetter(cellData)
        const changedCells = setterActions({
            actions,
            cellsDataFromState: cellData,
            cellsDataExecuted: dataExecutedByCell
        })
        setCell(changedCells)
    }
export const UseWebLineService = <Cell extends object>({cells}: TUseWebLineService<Cell>) => {
    const [cellsData, setCellsDataToState] = useState<Cell>(cells)
    const {cellActions} = useWebTableActionsContext<Cell>()
    const setCellsData = setCellsDataFabric(setCellsDataToState, cellsData, cellActions)
    return {cellsData, setCellsData}
}
