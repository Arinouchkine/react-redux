import  { createStore } from 'redux';

export interface ReduxState {
    lines: string[];
}

const  defaultState: ReduxState = {
    lines: []
}

function reducer(state:ReduxState,action: any) {
    switch(action.type)
    {
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    //@ts-ignore

)

