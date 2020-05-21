import React, {useContext} from "react";
import {Context} from "../App";
import {Question} from "./Question";
import { IQuest } from "../reducer";

export const QLIst: React.FC = () => {
    const {state} = useContext(Context)

    return (
        <div>
            {state.map((q: IQuest) => <Question state={q} key={q.id}/>)}
        </div>
    )
}