import {FCellDataFromCel} from "../../components/WebLine/useWebLineService";

export type TWebTableLineApi<Cell extends Object> = {
    lineInformation: {},
    setCell: FCellDataFromCel<Cell>,
    cells: Cell,
}
