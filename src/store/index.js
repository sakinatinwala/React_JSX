import { createStore } from "redux";

const counterReducer = (state = {counter:0},action) => {
    if (action.type === "Data" ) {
        return {counter:state.counter + action.state};
    }
    return { counter: state.counter };
}

export const store = createStore(counterReducer);