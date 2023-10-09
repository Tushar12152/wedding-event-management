
const Gallary = () => {
    return (
        <div className="w-[80%] mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <img   data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="w-full h-[450px] rounded-md lg:col-span-2" src="https://i.ibb.co/54b348m/download.jpg" alt="" />
                 <img   data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="w-full h-[450px] rounded-md" src="https://i.ibb.co/fH2DPZP/download.jpg" alt="" />
                 <img   data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500" className="w-full h-[450px] rounded-md" src="https://i.ibb.co/brg6nWR/download.jpg" alt="" />
                 <img  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-full h-[450px] rounded-md lg:col-span-2" src="https://i.ibb.co/bHYLjkq/download.jpg" alt="" />
                 <img   data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500" className="w-full h-[450px] rounded-md lg:col-span-2" src="https://i.ibb.co/w4VKQR6/images.jpg" alt="" />
                 <img  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-full h-[450px] rounded-md" src="https://i.ibb.co/SVsQY8r/04d5b5ec-fe95-4434-8dde-5cf86a347c3b-rs-768.webp" alt="" />
            </div>
        </div>
    );
};

export default Gallary;