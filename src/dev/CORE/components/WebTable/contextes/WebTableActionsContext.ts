import React from "react";
import {LineAction} from "../../WebLine/WebLine";

export type TWebTableActionsContext<Cell extends object> = {
    cellActions: LineAction<Cell>[] | undefined
}
export const WebTableActionsContext = React.createContext<TWebTableActionsContext<object>>({} as TWebTableActionsContext<object>)

export const useWebTableActionsContext = <Cell extends object>
() => React.useContext(WebTableActionsContext) as unknown as TWebTableActionsContext<Cell>
