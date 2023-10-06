import { useLoaderData, useParams } from "react-router-dom";

const ViewDetail = () => {
    const {id}=useParams()
    // console.log(id)
    const services=useLoaderData()

    const selectedCard=services.find(service=>service.id==id)
    console.log(selectedCard)
    const{img,name,title,short_description,price}=selectedCard;
    return (
        <div>
            <div className="flex border-2 border-gray-700 w-[60%] rounded-xl mx-auto mt-20">
                  <div className="p-10">
                        <img className="w-full" src={img} alt="" />
                  </div>
                  <div className="p-10">
                        <h1 className="font-semibold text-4xl text-center ">{name}</h1>
                        <h1 className="font-semibold text-2xl text-center ">{title}</h1>
                        <h1 className="font-semibold text-2xl text-center ">Cost:${price}</h1>
                        <p className=" text-[10px] text-gray-400 text-center ">{short_description}</p>
                  </div>
            </div>  
        </div>
    );
};

export default ViewDetail;