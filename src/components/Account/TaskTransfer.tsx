import * as React from 'react'
import {FunctionComponent} from "react";
import {MiniatureUser} from "./MiniatureUser";
import './AccountStyle.css'
export interface TaskTransferProps {
}

export const TaskTransfer:FunctionComponent<TaskTransferProps>=()=>{
    return(
        <div className="transferContainer">
            <div className="titleForm">
                <strong >Передать задачу</strong>
            </div>
            <form className="formFIO">
                <input placeholder="Добавить исполнителя" className="inputFIO"/>
            </form>
            <div className="poolDesigner">
                        <MiniatureUser/>
                <MiniatureUser/>
                <MiniatureUser/>
                <MiniatureUser/>

            </div>
            <div className="sendbar">
                <form className="formTextArea">
                    <textarea placeholder="добавить комментарий" className="textareaComment"/>
                </form>

            </div>
            <div className="hotkey">
                <svg  viewBox="0 0 24 24" className="hotkeyIcon">
                    <path fill="#000000" d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" />
                </svg>
                <h1>B</h1>
                <h1>A</h1>
            </div>
            <div className="FooterTaskTransfer">
                <div className="cancel">Cancel</div>
                <div className="accept">Accept</div>
            </div>
        </div>
    )
}