import React from 'react';
import {TCustomCell} from "../../../../../types/TCustomCell";
import {useWebTableLineApi} from "../../../../../components/WebLine/useWebLineContext";
import {TOrderedProduct} from "../../../tableConector/tableConector";

const CellCount: TCustomCell = () => {
    const { setCell, cells} = useWebTableLineApi<TOrderedProduct>()
    const setter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const count = Number(e.target.value)
        setCell((prev)=>({
            ...prev,
            count,
        }))
    }
    return (
        <input onChange={setter} type="number" placeholder={'count'} value={cells.count}/>

    );
};

export {CellCount};
