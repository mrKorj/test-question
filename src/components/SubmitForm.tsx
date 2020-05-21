import React, {useContext, useState} from "react";
import {Context} from "../App";
import {Button} from 'react-bootstrap'
import {ActionTypes} from "../reducer";

export const SubmitForm: React.FC = () => {
    const {dispatch} = useContext(Context)
    const [disBtn, setDisBtn] = useState({btn1: false, btn2: true})


    const submitHandler = () => {
        setDisBtn({btn1: true, btn2: false})
        dispatch({
            type: ActionTypes.SUBMIT_TEST,
        })
    }
    const againHandler = () => {
        setDisBtn({btn1: false, btn2: true})
        dispatch({
            type: ActionTypes.TRY_AGAIN
        })
    }

    return (
        <div>
            <hr/>
            <Button disabled={disBtn.btn1} onClick={submitHandler}>Submit test</Button>
            <Button disabled={disBtn.btn2} className='ml-4 btn-danger' onClick={againHandler}>Try again</Button>
        </div>
    )
}