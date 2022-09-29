// reducer is a function that updates state, by returning a new state object. It NEVER alters the original state object
// this does not mean the data inside the state object isn't altered, it is that state is immutable: it should NEVER be directly altered
// when updating state, it is important we do so by creating a new version of it--RATHER THAN reaching out and directly altering it
import { reducer } from "../utils/reducers";

import {
    UPDATE_CATEGORIES,
    UPDATE_PRODUCTS,
    UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

// create a sample of what our GS will look like
const initialState = {
    products: [],
    categories: [{ name: "Food" }],
    currentCategory: "1",
};

// want to create a new state object. We are updating products
test("UPDATE_PRODUCTS", () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}],
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

//
test("UPDATE_CATEGORIES", () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}],
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

test("UPDATE_CURRENT_CATEGORY", () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: "2",
    });

    expect(newState.currentCategory).toBe("2");
    expect(initialState.currentCategory).toBe("1");
});
