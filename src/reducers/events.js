import { READ_EVENTS } from "../actions"

const initialState = { value: 0 }

export default (state = {}, action ) => {
    switch (action.type) {
        case READ_EVENTS:
            return state
        default:
            return state;
    }
}