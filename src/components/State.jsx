import {createStore} from "redux";

const counterReducer = (state = {counter:0},action) => {
    if (action.type === "Data" ) {
        return {counter:state.data};
    }
}

export const store = createStore(counterReducer);