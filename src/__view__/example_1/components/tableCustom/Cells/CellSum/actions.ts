import {LineAction} from "../../../../../components/WebLine/WebLine";
import {TOrderedProduct} from "../../../tableConector/tableConector";

export const sumAction: LineAction<TOrderedProduct> = {
    subscribe: ['count', 'cost'],
    to: 'sum',
    func: (cellData) => {
        return {...cellData, sum: cellData.cost * cellData.count}
    }
}
