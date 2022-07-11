import React, {useMemo} from 'react';
import {WebLine} from "../WebLine/WebLine";
import {useWebTableComponentsContext} from "../WebTable/contextes/WebTableContext";
import {TCustomShield} from "../../types/API/TCustomShield";
import {LineData} from "../../types/DataInterfaces/Line";

export type TWebShield = {
    Shield: TCustomShield<object>
    lineData: LineData<object, object>[]
}

const WebShield: React.FC<TWebShield> = React.memo(({Shield, lineData}) => {
    const {Line, cellsStructure} = useWebTableComponentsContext()
    const WebLineComp = useMemo(() => (<WebLine Line={Line} cells={cellsStructure}/>),[])
    return (
        <Shield CustomLine={WebLineComp} lineData={lineData}/>
    );
});

export {WebShield};
