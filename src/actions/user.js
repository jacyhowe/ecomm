import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}


export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            },
        ]
    })
}
export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A5857895',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 18.02,
                orderNumber: 'B9009732',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jacy Howe',
                    shippingAddress: '1234 East State Street'
                }
            },
            {
                _id: 2,
                total: 15.00,
                orderNumber: 'C09720937',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Charlie Howe',
                    shippingAddress: '4321 West State Street'
                }
            },
            {
                _id: 3,
                total: 92.34,
                orderNumber: 'D789547',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Billy Howe',
                    shippingAddress: '4321 West State Street'
                }
            },
            {
                _id: 4,
                total: 54.88,
                orderNumber: 'T9034802',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Chae Liljenquist',
                    shippingAddress: '1234 Syracuse Street'
                }
            },
            {
                _id: 5,
                total: 43.21,
                orderNumber: 'L8904234',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Cheryl Howe',
                    shippingAddress: '4324 Riverside Street'
                }
            },
            {
                _id: 6,
                total: 42.98,
                orderNumber: 'A5857895',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Chuck Howe',
                    shippingAddress: '7904 West Riverside Street'
                }
            },
            {
                _id: 7,
                total: 54.11,
                orderNumber: 'G789432',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Colby Howe',
                    shippingAddress: '7324 West Riverside Street'
                }
            }
            
        ]
    })
}

