import { useEffect, useState } from "react";
import PurchaseCard from "./PurchaseCard/PurchaseCard";
import { Helmet } from "react-helmet-async";


const Purchase = () => {

 const [details,setDetails]=useState([])
 const [error,setError]=useState('')

 useEffect(()=>{
    const selectCard = JSON.parse(localStorage.getItem('cardDetails'))
    if(selectCard){
      setDetails(selectCard)
    }
    else{
      setError('No Data Found')
    }

 },[])



    return (
        <div>
          <Helmet>
            <title>Purchase</title>
          </Helmet>
        <h1 className="font-bold text-center mt-32 text-2xl text-pink-500">{error}</h1>
         <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {
            details.map(detail=><PurchaseCard key={detail.id} detail={detail}></PurchaseCard>)
          }
         </div>
        </div>
    );
};

export default Purchase;