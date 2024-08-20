import { Link } from "react-router-dom";
function Header({setSearch}){

    return(
        <>
        <nav className="flex justify-evenly items-center bg-slate-600 text-white p-2">
        <div className="text-lg sm:text-xl md:text-2xl hover:text-gray-400">
            <Link to="/">
            Home
            </Link>
        </div>
        <div>
            <input type="text" className="p-2 rounded-lg text-right bg-blue-950" onChange={(e)=>setSearch(e.target.value)} placeholder="Search a item..."/>
        </div>
        <div>
            <Link to="cart">
            <img src="shopping-cart.png" alt="Shopping Cart" className="w-8 sm:w-10 md:w-12 lg:w-12 hover:bg-white"/>
            </Link>
        </div>
        </nav>
        </>
    )
}

export default Header;