import { useState , useEffect } from "react";

function TotalBill({products}){
    let [bill,setBill] = useState(0);
    useEffect(calculateTotal,[])
    function calculateTotal()
    {
        const total = products.reduce((acc, item) => acc + item.price, 0);
    setBill(total);
    }
    return(
        <>
        <div className="bg-gray-800 text-white font-mono p-2 m-2 rounded-full text-center">
        Total Price :- ${bill}
        </div>
        
        </>
    )
}

export default TotalBill;