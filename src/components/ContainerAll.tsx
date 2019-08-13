import * as React from 'react'
import {FunctionComponent} from "react";
import {Header} from "../Header/Header";
import {Container, Word} from "./Container";
import {useState} from "react";
import _selected from "../RenoJson.json";
import Popover from "react-tiny-popover";
import '../Header/HeaderStyle.css'
import '../containerFullStyle.css'
import './Styles.css'
import {Account} from "./Account/Account";
import {TaskTransfer} from "./Account/TaskTransfer";
export interface ContainerAllProps {

}
export const wordsData: Word[] = _selected;
export const ContainerAll:FunctionComponent<ContainerAllProps>=()=>{
    const [popover,setPopover]=useState(false)
    const [selected, setSelected] = useState<ReadonlyArray<Word>>(wordsData);
    const [givingTask,setGivingTask]=useState()
    return(
        <div className="containerFullApp">
            <Popover
                isOpen={popover}
                position={'top'}
                content={(
                    <Container amountKeywords={selected} setSelectedAmount={setSelected}/>)}
            >
            <Header popover={popover}
                    setPopover={setPopover}
                    selected={selected}

            />

            </Popover>
            <Account handleGivingTask={}/>
            <TaskTransfer/>
        </div>
    )
}