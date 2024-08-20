import CartProduct from './cartProduct.jsx'
import TotalBill from './TotalBill.jsx'

function Cart({products,removeFromCart}){
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {products.map(item=>(
            <CartProduct name={item.name} rating={item.rating} price={item.price} removeFromCart={removeFromCart} quantity={item.quantity}/>
        ))}
        </div>
        <div>
            <TotalBill products={products}/>
        </div>
        </>
    )
}

export default Cart;