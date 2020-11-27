import * as Types from './../constants/ActionTypes'
import callAPI from "./../utils/apiCaller"
export const actFetchProductRequest = () => {
    return (dispatch) => {
        return callAPI('products', 'GET',null).then(res => {
            dispatch(actFetchProduct(res.data))
        })
    }
    
}
export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return(dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        })
    }
    
}
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
export const actGetProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET',null).then(res => {
            dispatch(actGetProduct(res.data))           
          })
    }
}
export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callAPI(`products/${product.id}`, 'PUT',product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}