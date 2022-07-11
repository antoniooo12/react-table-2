import React, {useEffect} from 'react';
import {TCustomCell} from "../../../../../../dev/CORE/types/API/TCustomCell";
import {useWebTableLineApi} from "../../../../../../dev/CORE/components/WebLine/webLineContext";
import {TOrderedProduct} from "../../../../tableConector/tableConector";

const CellSum: TCustomCell = () => {
    const { setCell, cells} = useWebTableLineApi<TOrderedProduct>()
    console.log(`sum: ${cells.sum}`)

    return (
        <input readOnly={true} type="number" placeholder={'sum'} value={cells.sum}/>
    );
};

export {CellSum};
