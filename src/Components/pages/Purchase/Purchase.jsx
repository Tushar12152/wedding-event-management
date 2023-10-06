import { useEffect, useState } from "react";
import PurchaseCard from "./PurchaseCard/PurchaseCard";


const Purchase = () => {

 const [details,setDetails]=useState([])

 useEffect(()=>{
    const selectCard = JSON.parse(localStorage.getItem('cardDetails'))
    setDetails(selectCard)
 },[])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            details.map(detail=><PurchaseCard key={detail.id} detail={detail}></PurchaseCard>)
          }
        </div>
    );
};

export default Purchase;