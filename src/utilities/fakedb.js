// use local storage to manage cart data
const addToDb = id =>{
    let itemCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('item-cart');
    if(storedCart){
        itemCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = itemCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        itemCart[id] = newQuantity;
    }
    else{
        itemCart[id] = 1;
    }
    localStorage.setItem('item-cart', JSON.stringify(itemCart));
}

const getStoredCart = () => {
    let itemCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('item-cart');
    if(storedCart){
        itemCart = JSON.parse(storedCart);
    }
    return itemCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('item-cart');
    if(storedCart){
        const itemCart = JSON.parse(storedCart);
        if(id in itemCart){
            delete itemCart[id];
            localStorage.setItem('item-cart', JSON.stringify(itemCart));
        }
    }
}

const deleteItemCart = () =>{
    localStorage.removeItem('item-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deleteItemCart
}