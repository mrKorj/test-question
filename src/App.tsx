import React, {createContext, useReducer} from 'react';
import reducer, {initialState} from "./reducer";
import {Container} from "react-bootstrap";
import {QLIst} from "./components/QList";
import {SubmitForm} from "./components/SubmitForm";


// @ts-ignore
export const Context = createContext()

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            <Container className='mt-2'>
                <QLIst/>
                <SubmitForm/>
            </Container>
        </Context.Provider>
    );
}

export default App;
