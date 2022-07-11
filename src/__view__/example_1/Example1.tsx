import React, {useEffect} from 'react';
import {WebTable} from "../../dev/CORE/components/WebTable/WebTable";
import {Line} from "./components/tableCustom/Line";
import {useTableConnect} from "../../dev/CORE/API/tableConnect";
import {cells, TOrderedProduct} from "./tableConector/tableConector";
import {sumAction} from "./components/tableCustom/Cells/CellSum/actions";
import {CustomShield} from "./components/tableCustom/CustomShield";


const Example1 = () => {
    const {tableConnector, api} = useTableConnect({
        CustomLine: Line,
        CustomShield: CustomShield,
        cells: cells,
        lineActions: [sumAction]
    })
    return (
        <WebTable connector={tableConnector}/>
    );
};

export {Example1};
