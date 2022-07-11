import React from 'react';
import {TCustomCell} from "@CORE/types/API/TCustomCell";
import {useWebTableLineApi} from "@CORE/components/WebLine/webLineContext";
import {TOrderedProduct} from "../../../../tableConector/tableConector";

const CellCost: TCustomCell = () => {

    const {setCell, cells} = useWebTableLineApi<TOrderedProduct>()
    const setter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cost = Number(e.target.value)
        setCell((prev) => ({
            ...prev,
            cost,
        }))
    }
    return (
        <input
            onChange={setter}
            type={'number'}
            placeholder={'cost'}
            value={cells.cost}
        />
    );
};

export {CellCost};
