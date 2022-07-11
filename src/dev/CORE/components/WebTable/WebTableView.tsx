import React from 'react';
import {TWebTableConnector} from "./types";
import {WebShield} from "../WebShield/WebShield";
import {useWebTableContext} from "./contextes/WebTableContext";

const WebTableView: React.FC<TWebTableConnector> = ({connector}) => {
    const {line} = useWebTableContext()
    return (
            <WebShield Shield={connector.customComponents.Shield} lineData={line.linesData}/>
    );
};

export {WebTableView};
