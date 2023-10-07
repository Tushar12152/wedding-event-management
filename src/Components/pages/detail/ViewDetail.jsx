import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ViewDetail = () => {
    const {id}=useParams()
    // console.log(id)
    const services=useLoaderData()
    

    const selectedCard=services.find(service=>service.id==id)
    // console.log(selectedCard)
    const{img,name,title,short_description,price,}=selectedCard;
    const handlePurchase=()=>{
       
    
        const selectCart=[];
        // console.log(selectCart,'select')
        const selectCard = JSON.parse(localStorage.getItem('cardDetails'))
      if(!selectCard){
           selectCart.push(selectedCard)
        
           localStorage.setItem('cardDetails',JSON.stringify(selectCart))
           swal("Congratulation!", "You are successfully purchase this service!", "success");
      }
      else{
      
         const isExist=selectCard.find(card=>card.id==id)
         if(!isExist){
            selectCart.push(...selectCard,selectedCard)
            localStorage.setItem('cardDetails',JSON.stringify(selectCart))
            swal("Congratulation!", "You are successfully purchase this service!", "success");
         }
         else{
            swal("Sorry!", "You are already purchase this service!", "error")
         }

      
      }
    }
    return (
        <div>
            <div className="lg:flex  border-2 border-gray-700 lg:w-[60%] rounded-xl mx-auto mt-20">
                  <div className="p-10">
                        <img className="w-full" src={img} alt="" />
                  </div>
                  <div className="p-10">
                        <h1 className="font-semibold text-4xl lg:text-center ">{name}</h1>
                        <h1 className="font-semibold text-2xl lg:text-center ">{title}</h1>
                        <h1 className="font-semibold text-2xl lg:text-center ">Cost:${price}</h1>
                        <p className=" text-[10px] text-gray-400 lg:text-center ">{short_description}</p>

                        <button onClick={handlePurchase} className="btn bg-pink-200 lg:ml-32 mt-2">Purchase Service</button>
                  </div>
            </div>  
        </div>
    );
};

export default ViewDetail;