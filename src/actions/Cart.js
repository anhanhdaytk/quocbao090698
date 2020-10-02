
export const inCreMent = (index) => {
    return{
        type: 'INCREMENT',
        payload: index
    }
}
export const deCreMent = (index) =>{
    return{
        type: 'DECREMENT',
        payload: index,
    }
}
export const remove = (index) =>{
    return{
        type: 'REMOVE',
        payload: index
    }
}
// add cart
export const addcart = (index)  => {
    return{
        type: 'ADDCART',
        payload: index
    }
}
