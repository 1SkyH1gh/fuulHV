import * as React from 'react'
import {FunctionComponent} from "react";

export interface MiniatureUserProps {

}

export const MiniatureUser:FunctionComponent<MiniatureUserProps>=()=>{
    return(
      <div className="miniatureUserContainer">

        <div className="currentStatus">Ac</div>
        <div className="professionPool">
            <div className="NameStatus">
        <div className="name"> Константинов А.М</div>

    <div className="profession">web-designer</div>
            </div>
        </div>
      </div>
    )
}