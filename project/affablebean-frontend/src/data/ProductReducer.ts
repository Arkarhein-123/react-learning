import type { ProductAction, ProductState } from "./Type"

export function productReducer(state : ProductState, action : ProductAction) : ProductState {
    switch(action.type) {
        case 'FETCH_START':
            return {...state, loading : true, error : null}
        case 'FETCH_SUCCESS':
            return {...state, loading : false, products : action.payload}
        case 'FETCH_ERROR':
            return {...state, loading : false, error : action.payload}
        default:
            return state
    }
}