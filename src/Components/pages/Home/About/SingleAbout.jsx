import PropTypes from 'prop-types'
const SingleAbout = ({about}) => {
    console.log(about)
    const {img,name,position}=about;
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
             <div className='border-2 border-gray-400 bg-pink-100 rounded-lg w-[50%] mx-auto flex justify-between items-center mb-4'>
                <div>
                     <img  className='rounded-full p-5' src={img} alt="" />
                </div>
                <div className='px-5 pl-16 h-11/12 border-l-4 border-pink-900'>
                    <h1 className='font-bold text-center text-2xl'>{name}</h1>
                    <h1 className='font-semibold text-center text-xl'>{position}</h1>
                </div>
             </div>
        </div>
    );
};
SingleAbout.propTypes={
    about:PropTypes.object.isRequired,
}
export default SingleAbout;