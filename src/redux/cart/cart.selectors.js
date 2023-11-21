export function selectProductsCount (rootReducer){
  return rootReducer.cartReducer.products.reduce((acc, current) => acc + current.quantity ,0,)
}

export function selectedProductsTotalPrice(rootReducer){
    return rootReducer.cartReducer.products.reduce((acc, product) => acc + product.price * product.quantity  , 0)
}