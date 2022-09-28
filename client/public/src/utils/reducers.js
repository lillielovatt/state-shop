import {
    UPDATE_CATEGORIES,
    UPDATE_PRODUCTS,
    UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is value of "UPDATE_PRODUCTS", return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        // if it's none of these actions, don't update state at all and keep things the same
        default:
            return state;
    }
};
