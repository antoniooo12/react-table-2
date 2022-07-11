import {setupCells} from "@CORE/API/setupCells";

export type TOrderedProduct = {
    name: string;
    type: string;
    count: number;
    cost: number;
    sum: number;
}
export const cells: TOrderedProduct = {
    name: '',
    type: '',
    cost: 2,
    count: 0,
    sum: 0,
}

export const cellsParams = setupCells(cells, {
    // name: {default: 'previous'}
})

