import {
    // SET_SHOP_CATEGORY
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    SET_SHOP_CATEGORY
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    products: [],
    filteredProducts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_CATEGORY:
            const categories = action.payload;
            return {
                ...state,
                categories
            }
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            var filteredProducts = [];
            state.products.map( product => {
                if(product.belongsTo.includes(action.payload)) {
                   filteredProducts.push(product);
                }
            })
            return {
                ...state,
                filteredProducts
            }
    
        default: return state;
    }
}