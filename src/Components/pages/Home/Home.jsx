import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Service from "./Service";
import Footer from "../../footer/Footer";
import About from "./About/About";
import Gallary from "../../Gallary/Gallary";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const services=useLoaderData()
    // console.log(services)
    return (
        <div>
             <Helmet>
             <title>Home</title>
          </Helmet>
            <Banner></Banner>
               <h1 className="text-center font-bold text-4xl  py-20">Our Services</h1>
               <div className="w-[95%] mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }

               </div>
  
               <h1 className="text-center font-bold text-4xl  py-20">About Us</h1>
               <About></About>
               <h1 className="text-center font-bold text-4xl  py-20">Gallary</h1>
                <Gallary></Gallary>

              

               <Footer></Footer>

        </div>
    );
};

export default Home;