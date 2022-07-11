import React, {useContext, useEffect, useState} from 'react';
import {TCustomCell} from "../../../../../types/TCustomCell";
import {useWebTableLineApi, WebTableLineApiContext} from "../../../../../components/WebLine/useWebLineContext";
import {TOrderedProduct} from "../../../tableConector/tableConector";

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
