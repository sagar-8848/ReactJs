const initialData={
    cartCount:0
}

const cartReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                cartCount:++state.cartCount
            }

        case 'REMOVE_FROM_CART':
            return{
                cartCount:--state.cartCount

            }

            default:
                return state
    }


   
}
export default cartReducer




// state - initial state ko value lini

// action - tesko value read garni