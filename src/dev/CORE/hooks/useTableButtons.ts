import {useContext} from "react";
import {TWebTableContext, WebTableContext} from "../components/WebTable/contextes/WebTableContext";

export const useTableButtons = <Cells extends object, Line extends object>() => {
    const tableContext = useContext(WebTableContext)
    return tableContext as unknown as TWebTableContext<Cells, Line>

}
