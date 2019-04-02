import { 
    // SET_SHOP_CATEGORY, 
    SET_NAVBAR_LINKS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                id: 0,
                title: 'All'
            },
            {
                id: 1,
                title: 'JavaScript'
            },
            {
                id: 2,
                title: 'UI/UX'
            },
            {
                id: 3,
                title: 'Python'
            },
            {
                id: 4,
                title: 'Linux'
            },
            {
                id: 5,
                title: 'UML'
            },
            {
                id: 6,
                title: 'Ruby'
            }
        ]
    })
}