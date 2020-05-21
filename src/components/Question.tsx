import React, {useContext, useRef} from "react";
import {ActionTypes, IQuest} from "../reducer";
import {Context} from "../App";
import {InputGroup, FormControl} from "react-bootstrap";

interface QProps {
    state: IQuest
}

export const Question: React.FC<QProps> = ({state}) => {
    const {dispatch} = useContext(Context)
    const ref = useRef<HTMLInputElement>(null)

    const inputHandler = (id: number) => {
        const val = ref.current!.value
        dispatch({
            type: ActionTypes.INPUT_ANSWER,
            payload: {val, id}
        })
    }

    const classes = ['question', 'mt-2']
    if (state.correct) {
        classes.push('correct')
    }
    if (state.notCorrect) {
        classes.push('notCorrect')
    }

    const inputForm = (
        <div>
            <InputGroup size='sm'>
                <InputGroup.Prepend>
                    <InputGroup.Text>{state.id}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl ref={ref}
                             placeholder='enter answer'
                             onChange={() => inputHandler(state.id)}/>
            </InputGroup>
            <span className='text-secondary'>variants: {state.variants.join(', ')}</span>
        </div>
    )

    return (
        <div className={classes.join(' ')}>
            <span>Question #{state.id}: </span>
            <h4>{state.question}</h4>
            {
                state.correct
                    ? <p className='text-success'>Your answer: "{state.userAnswer}" is correct</p>
                    : state.notCorrect
                        ? <p className='text-danger'>Your answer: "{state.userAnswer}" is not correct</p>
                        : inputForm
            }
        </div>
    )
}