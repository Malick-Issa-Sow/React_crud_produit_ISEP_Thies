import * as Types from './../constants/ActionTypes'
var initialState = [
    
]

const products = (state = initialState,action) => {
    var index = -1
    var {id, product} = action
    var findIndex = (product,id) => {
        var result = -1
        product.forEach((product,index) => {
          if(product.id === id){
            result = index
          }
        })
        return result
      }

    switch(action.type){
        case Types.FETCH_PRODUCT:
            state = action.products
            return [...state]
        case Types.DELETE_PRODUCT:
            index = findIndex(state,id)
            state.splice(index,1)
            return [...state]
        case Types.ADD_PRODUCT: {
            state.push(action.product)
            return [...state]        
        }
        case Types.UPDATE_PRODUCT: {
            index = findIndex(state,product.id)
            state[index] = product
            return [...state]
        }

        default: return [...state]
    }
}

export default products