import {useContext} from "react";
import {WebTableContext} from "../components/WebTable/contextes/WebTableContext";

export const useTableButtons = () => {
    const tableContext = useContext(WebTableContext)
    return tableContext
}
