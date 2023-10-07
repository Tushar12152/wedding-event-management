import { Link, useLoaderData } from "react-router-dom";
import SingleWedding from "./singleWedding";
import { Helmet } from "react-helmet-async";

const Wedding = () => {
    const weddings=useLoaderData()
    // console.log(weddings)
    return (
        <div> 
            <Helmet>
                <title>Weddings</title>
            </Helmet>
             <h1 className="font-semibold text-4xl text-center mt-20">Special Wedding Features</h1>
                 <p className="text-center p-5 text-gray-500"> To get out special weddings service please contact with us in our <Link className="text-blue-600" to='#'>Facebook Page</Link>........</p>
              <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                      weddings.map(wedding=><SingleWedding key={wedding.id} wedding={wedding}></SingleWedding>)
                    }
              </div>
        </div>
    );
};

export default Wedding;