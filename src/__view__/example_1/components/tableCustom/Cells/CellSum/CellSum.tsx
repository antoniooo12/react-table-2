import React, {useEffect} from 'react';
import {TCustomCell} from "../../../../../types/TCustomCell";
import {useWebTableLineApi} from "../../../../../components/WebLine/useWebLineContext";
import {TOrderedProduct} from "../../../tableConector/tableConector";

const CellSum: TCustomCell = () => {
    const { setCell, cells} = useWebTableLineApi<TOrderedProduct>()
    console.log(`sum: ${cells.sum}`)

    return (
        <input readOnly={true} type="number" placeholder={'sum'} value={cells.sum}/>
    );
};

export {CellSum};
