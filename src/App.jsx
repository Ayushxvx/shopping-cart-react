import { Routes , Route } from "react-router-dom";
import Header from './Header.jsx'
import Products from './Products.jsx'
import Cart from './Cart.jsx'
import Footer from './Footer.jsx'
import { useState , useEffect } from "react";
function App(){

    let [cartProducts,setCartProducts] = useState([]);

    const [sProducts,setSProducts] = useState([])

    function addToCart(id){
        let cProductIndex;
        let cProduct =  products.find(item=>item.id==id)
        cProductIndex = cartProducts.indexOf(cProduct)
        if(cProductIndex!=-1){
            cartProducts[cProductIndex].quantity +=1;
        }
        else{
            setCartProducts([...cartProducts,cProduct])
        }
    }

    const [search,setSearch] = useState()

    const [products,setProducts] = useState([
        {
            id: 1,
            name: 'Apple Watch',
            rating: 4.7,
            price: 599,
            quantity: 1
          },
          {
            id: 2,
            name: 'Apple MacBook',
            rating: 4.4,
            price: 1599,
            quantity: 1
          },
          {
            id: 3,
            name: 'Apple Earbuds',
            rating: 3.9,
            price: 199,
            quantity: 1
          },
          {
            id: 4,
            name: 'Apple Iphone',
            rating: 4.9,
            price: 999,
            quantity: 1
          },
          {
            id: 5,
            name: 'Apple Ipad',
            rating: 5.0,
            price: 1299,
            quantity: 1
          },
          {
            id: 6,
            name: 'Samsung TV',
            rating: 4.5,
            price: 799,
            quantity: 1
          },
          {
            id: 7,
            name: 'Sony Headphones',
            rating: 4.2,
            price: 149,
            quantity: 1
          },
          {
            id: 8,
            name: 'HP Laptop',
            rating: 4.1,
            price: 699,
            quantity: 1
          },
          {
            id: 9,
            name: 'Canon Camera',
            rating: 4.8,
            price: 499,
            quantity: 1
          },
          {
            id: 10,
            name: 'Nike Shoes',
            rating: 4.6,
            price: 89,
            quantity: 1
          },
          {
            id: 11,
            name: 'Adidas Jacket',
            rating: 4.3,
            price: 129,
            quantity: 1
          },
          {
            id: 12,
            name: 'Levi Jeans',
            rating: 4.5,
            price: 79,
            quantity: 1
          },
          {
            id: 13,
            name: 'Rayban Sunglasses',
            rating: 4.7,
            price: 199,
            quantity: 1
          },
          {
            id: 14,
            name: 'Oakley Watch',
            rating: 4.4,
            price: 299,
            quantity: 1
          },
          {
            id: 15,
            name: 'Gucci Handbag',
            rating: 4.8,
            price: 499,
            quantity: 1
          },
          {
            id: 16,
            name: 'Prada Shoes',
            rating: 4.6,
            price: 399,
            quantity: 1
          },
          {
            id: 17,
            name: 'Hugo Boss Suit',
            rating: 4.5,
            price: 699,
            quantity: 1
          },
          {
            id: 18,
            name: 'Calvin Klein Underwear',
            rating: 4.4,
            price: 29,
            quantity: 1
          },
          {
            id: 19,
            name: 'Lacoste Polo',
            rating: 4.3,
            price: 49,
            quantity: 1
          },
          {
            id: 20,
            name: 'Ralph Lauren Shirt',
            rating: 4.7,
            price: 79,
            quantity: 1
          },
          {
            id: 21,
            name: 'Tommy Hilfiger Jeans',
            rating: 4.5,
            price: 99,
            quantity: 1
          },
          {
            id: 22,
            name: 'Versace Sunglasses',
            rating: 4.8,
            price: 299,
            quantity: 1
          },
          {
            id: 23,
            name: 'Dolce Gabbana Handbag',
            rating: 4.6,
            price: 599,
            quantity: 1
          },
          {
            id: 24,
            name: 'Fendi Shoes',
            rating: 4.5,
            price: 499,
            quantity: 1
          },
          {
            id: 25,
            name: 'Gucci Belt',
            rating: 4.4,
            price: 199,
            quantity: 1
          },
          {
            id: 26,
            name: 'Prada Handbag',
            rating: 4.8,
            price: 699,
            quantity: 1
          },
          {
            id: 27,
            name: 'Hugo Boss Shoes',
            rating: 4.6,
            price: 399,
            quantity: 1
          },
          {
            id: 28,
            name: 'Calvin Klein Jeans',
            rating: 4.5,
            price:349,
            quantity:1
          },
          {

            id: 29,
          
            name: 'Lacoste Shirt',
          
            rating: 4.3,
          
            price: 69,
          
            quantity: 1
          
          },
          
          {
          
            id: 30,
          
            name: 'Ralph Lauren Polo',
          
            rating: 4.7,
          
            price: 89,
          
            quantity: 1
          
          },
          
          {
          
            id: 31,
          
            name: 'Tommy Hilfiger Jacket',
          
            rating: 4.5,
          
            price: 149,
          
            quantity: 1
          
          },
          
          {
          
            id: 32,
          
            name: 'Versace Watch',
          
            rating: 4.8,
          
            price: 399,
          
            quantity: 1
          
          },
          
          {
          
            id: 33,
          
            name: 'Dolce Gabbana Shoes',
          
            rating: 4.6,
          
            price: 599,
          
            quantity: 1
          
          },
          
          {
          
            id: 34,
          
            name: 'Fendi Handbag',
          
            rating: 4.5,
          
            price: 699,
          
            quantity: 1
          
          },
          
          {
          
            id: 35,
          
            name: 'Gucci Sunglasses',
          
            rating: 4.4,
          
            price: 299,
          
            quantity: 1
          
          },
          
          {
          
            id: 36,
          
            name: 'Prada Belt',
          
            rating: 4.8,
          
            price: 199,
          
            quantity: 1
          
          },
          
          {
          
            id: 37,
          
            name: 'Hugo Boss Suit',
          
            rating: 4.6,
          
            price: 799,
          
            quantity: 1
          
          },
          
          {
          
            id: 38,
          
            name: 'Calvin Klein Underwear',
          
            rating: 4.5,
          
            price: 29,
          
            quantity: 1
          
          },
          
          {
          
            id: 39,
          
            name: 'Lacoste Jeans',
          
            rating: 4.3,
          
            price: 99,
          
            quantity: 1
          
          },
          
          {
          
            id: 40,
          
            name: 'Ralph Lauren Shirt',
          
            rating: 4.7,
          
            price: 79,
          
            quantity: 1
          
          },
          
          {
          
            id: 41,
          
            name: 'Tommy Hilfiger Polo',
          
            rating: 4.5,
          
            price: 69,
          
            quantity: 1
          
          },
          
          {
          
            id: 42,
          
            name: 'Versace Handbag',
          
            rating: 4.8,
          
            price: 599,
          
            quantity: 1
          
          },
          
          {
          
            id: 43,
          
            name: 'Dolce Gabbana Sunglasses',
          
            rating: 4.6,
          
            price: 299,
          
            quantity: 1
          
          },
          
          {
          
            id: 44,
          
            name: 'Fendi Shoes',
          
            rating: 4.5,
          
            price: 499,
          
            quantity: 1
          
          },
          
          {
          
            id: 45,
          
            name: 'Gucci Belt',
          
            rating: 4.4,
          
            price: 199,
          
            quantity: 1
          
          },
          
          {
          
            id: 46,
          
            name: 'Prada Handbag',
          
            rating: 4.8,
          
            price: 699,
          
            quantity: 1
          
          },
          
          {
          
            id: 47,
          
            name: 'Hugo Boss Shoes',
          
            rating: 4.6,
          
            price: 399,
          
            quantity: 1
          
          },
          
          {
          
            id: 48,
          
            name: 'Calvin Klein Jeans',
          
            rating: 4.5,
          
            price: 99,
          
            quantity: 1
          
          },
          
          {
          
            id: 49,
          
            name: 'Lacoste Shirt',
          
            rating: 4.3,
          
            price: 69,
          
            quantity: 1
          
          },
          
          {
          
            id: 50,
          
            name: 'Ralph Lauren Polo',
          
            rating: 4.7,
          
            price: 89,
          
            quantity: 1
          
          },
          
          {
          
            id: 51,
          
            name: 'Tommy Hilfiger Jacket',
          
            rating: 4.5,
          
            price: 149,
          
            quantity: 1
          
          },
          
          {
          
            id: 52,
          
            name: 'Versace Watch',
          
            rating: 4.8,
          
            price: 399,
          
            quantity: 1
          
          },
          
          {
          
            id: 53,
          
            name: 'Dolce Gabbana Shoes',
          
            rating: 4.6,
          
            price: 599,
          
            quantity: 1
          
          },
          
          {
          
            id: 54,
          
            name: 'Fendi Handbag',
          
            rating: 4.5,
          
            price: 699,
          
            quantity: 1
          
          }
    ])

    function removeFromCart(id){
        let pId = cartProducts.findIndex(item=>item.id==id)
        cartProducts.splice(pId,1)
        setCartProducts([...cartProducts])
    }

    useEffect(()=>{
        let filteredProducts = products.filter((item)=>item.name.includes(search))
        setSProducts(filteredProducts)
    },[search])

    return(
        <>
        <Routes>
            <Route path="/" element={
                <>
                <Header setSearch={setSearch}/>
                <div className="p-2">
                <Products products={sProducts.length?sProducts:search?[]:products} addToCart={addToCart}/>
                </div>
                <Footer />
                </>
            }/>
            <Route path="cart" element={
                <>
                <Cart products={cartProducts} removeFromCart={removeFromCart}/>
                <Footer />
        </>
        }/>
        </Routes>
        </>
    )
}

export default App;