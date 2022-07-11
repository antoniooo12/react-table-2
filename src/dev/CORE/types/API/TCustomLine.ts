import React from "react";

export type TCustomLine = React.FC<{}>

export type TCustomLineData<LineData extends Object, CellData extends Object> = {
    lineData: LineData,
    cellData: CellData,
}
