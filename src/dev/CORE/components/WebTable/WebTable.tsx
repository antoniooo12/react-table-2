import React from 'react';
import {TWebTableConnector} from "./types";
import {WebTableContextComponent} from "./contextes/WebTableContextComponent";


const WebTable: React.FC<TWebTableConnector> = React.memo(({connector}) => {
    return (
        <WebTableContextComponent connector={connector}/>
    );
});

export {WebTable};
