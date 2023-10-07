import { useEffect, useState } from "react";
import SingleAbout from "./SingleAbout";

const About = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        const loadData=async()=>{
            const res=await fetch('/about.json')
            const data= await res.json()
            setData(data)
        }
        loadData()
    },[])
    // console.log(data)
    return (
        <div>
             {
                data.map(about=><SingleAbout key={about.id} about={about}></SingleAbout>)
             }
        </div>
    );
};

export default About;