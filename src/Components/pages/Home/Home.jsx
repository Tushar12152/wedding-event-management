import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Service from "./Service";

const Home = () => {
    const services=useLoaderData()
    // console.log(services)
    return (
        <div>
            <Banner></Banner>
               <h1 className="text-center font-bold text-4xl  py-10">Our Services</h1>
               <div className="w-[95%] mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }

               </div>
        </div>
    );
};

export default Home;