import { INCREMENT, DECREMENT } from "./types/types";

export function incrementLikes() {
    return {
        type: "INCREMENT"
    }
}

export function decrementLikes() {
    return {
        type: "DECREMENT"
    }
}