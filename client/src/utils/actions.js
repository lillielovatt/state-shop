
// used by ProductList component. RN, all product data comes from server, and Apollo caches results. Great for performance but means we need to go thru
// Apollo every time we want to update that list. End goal: store data retrieved for products by Apollo in this global state
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

// works a lot like UPDATE_PRODUCTS: we want to take list of categories retrieved from the server by Apollo and store it in this global state
// allows offline capabilities
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// connecting piece of data for previous 2: we want to be able to choose a category from state created by UC action ^
// and display products for that category from the list we create from UP action
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
