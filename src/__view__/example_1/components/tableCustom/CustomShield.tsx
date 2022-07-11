import React from 'react';
import {TCustomShield} from "../../../../dev/CORE/types/API/TCustomShield";
import {TableAddLineBtn} from "./Buttons/TableAddLineBtn";
import {TOrderedProduct} from "../../tableConector/tableConector";

const CustomShield: TCustomShield<TOrderedProduct> = ({CustomLine, lineData}) => {

    return (
        <div>
            <span><TableAddLineBtn/></span>
            shield
            {lineData.map(() => {
                return CustomLine
            })}
            shield
        </div>
    );
};

export {CustomShield};
