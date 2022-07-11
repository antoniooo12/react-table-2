import React from 'react';
import {CellCost} from "./Cells/CellCost/CellCost";
import {CellTitle} from "./Cells/CellTitle/CellTitle";
import {CellCount} from "./Cells/CellCount/CellCount";
import {CellSum} from "./Cells/CellSum/CellSum";

const Line: React.FC = () => {
    return (
        <div>
            <CellTitle/>
            <CellCost/>
            <CellCount/>
            <CellSum/>
        </div>
    );
};

export {Line};
