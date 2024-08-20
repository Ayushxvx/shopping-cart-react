import Product from './Product.jsx'

function Products({products,addToCart}){
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {products.map(item=>(
            <Product id={item.id} name={item.name} rating={item.rating} price={item.price} addToCart={addToCart} />
        ))}
        </div>
        </>
    )
}

export default Products;