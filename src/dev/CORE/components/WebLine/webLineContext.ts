import React from "react";
import {TWebTableLineApi} from "../../types/API/WebTableLineApi";

export const WebTableLineApiContext = React.createContext<TWebTableLineApi<Object>>({} as TWebTableLineApi<Object>)

export const useWebTableLineApi = <Cells extends Object>(cellName?: keyof Cells) => {
    let context = React.useContext(WebTableLineApiContext) as unknown as TWebTableLineApi<Cells>
    return context
}
