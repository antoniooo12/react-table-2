import React from "react";
import {LineData} from "../DataInterfaces/Line";

export  type TCustomShield<Cell> = React.FC<{
    CustomLine: JSX.Element,
    lineData: LineData<Cell, object>[]
}>
