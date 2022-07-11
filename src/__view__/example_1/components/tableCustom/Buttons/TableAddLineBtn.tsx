import React from 'react';
import {useTableButtons} from '@CORE/hooks/useTableButtons';
import {TOrderedProduct} from "../../../tableConector/tableConector";

const TableAddLineBtn: React.FC = () => {
    const {line, cell} = useTableButtons<TOrderedProduct, object>()
    const onClick = () => {
        line.setLinesData((prev) => ([...prev, {
            cellData: {
                name: '',
                cost: 0,
                count: 0,
                sum: 0,
                type: '',
                title: '',
            },
            lineData: {}
        }]))
    }
    return (
        <button onClick={onClick}>
            add Line
        </button>
    );
};

export {TableAddLineBtn};
