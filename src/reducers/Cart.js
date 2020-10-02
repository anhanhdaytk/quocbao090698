const initialState = {
    cart:[
        {
            id: 1,
            image: "image/spx2-4.png", 
            name: "Cây Chân Chim",
            price: 680000,
            discount: 250000,
        },
        {
            id: 2,
            image: "image/caydanhdu.png",
            name: "Cây Danh Dự",
            price: 250000,
            discount: 250000,
        },
        {
            id: 3,
            image: "image/caycota.png",
            name: "Cây Danh Dự",
            price: 200000,
            discount: 250000,
        }
    ],
    listCart: [],
}
const cartReducer = ( state = initialState, action) =>{
    switch(action.type){
        case 'ADDCART' : {
            let updateCart = JSON.parse(localStorage.getItem('listCart'))
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            console.log(index);
            if(index !== -1) {
                updateCart[index].qty += 1;
            }
            else{
                updateCart.push(action.payload)
            }
            state.listCart = updateCart;
            localStorage.setItem("listCart",JSON.stringify(state.listCart));
            return{ ...state};
            
        }
        case 'INCREMENT' : {
            
            let updateCart = JSON.parse(localStorage.getItem('listCart'))
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            updateCart[index].qty += 1;
            state.listCart = updateCart;
            localStorage.setItem("listCart",JSON.stringify(state.listCart));
            return{ ...state};
        }
        case 'DECREMENT' : {
            let updateCart = JSON.parse(localStorage.getItem('listCart'))
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            if(updateCart[index].qty > 1){
                updateCart[index].qty -= 1;
            }else{
                alert('không được phép!!!')
            }
            
            state.listCart = updateCart;
            localStorage.setItem("listCart",JSON.stringify(state.listCart));
            return{ ...state};
        }
        case 'REMOVE' : {
            let updateCart = JSON.parse(localStorage.getItem('listCart'))
            // let fil = state.listCart.filter(item => item.id !== action.payload.id)
            let fil = updateCart.filter(item => item.id !== action.payload.id)
            localStorage.setItem("listCart",JSON.stringify(fil));
            return{
                ...state,
                listCart : fil,
            }
        }
        default : 
        // break;
    }
    return state;
};
export default cartReducer;