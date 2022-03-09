import {INPUT_TEXT} from "./types/types";

const initialState = {
    text: ''
};

export const inputReducer = (state = initialState, action) => {
    console.log('inputTextReducer', action)
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}