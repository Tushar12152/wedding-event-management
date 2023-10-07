import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="mt-20  bg-gray-600">
            <footer className="footer p-10 w-[80%] mx-auto text-neutral-content flex items-center justify-between">
 
      <img className='w-[120px]' src="https://i.ibb.co/fkVcLM4/New-Logo.webp" alt="" />
    <p className='text-center text-2xl font-semibold'>The Farm House<br/>Wedding And Events</p>
  
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
       <a href="#"><FaFacebook></FaFacebook></a>
       <a href="#">   <FaTwitter></FaTwitter></a>
       <a href="#">   <FaInstagram></FaInstagram></a>

      
   
   
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;