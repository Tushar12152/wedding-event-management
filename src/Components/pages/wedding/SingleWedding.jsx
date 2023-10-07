import PropTypes from 'prop-types'


const SingleWedding = ({wedding}) => {
    const {image_url,wedding_category}=wedding;
    return (
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
              <div className='lg:w-72 w-52 mx-auto shadow-2xl rounded-lg'>
                  <img className='mx-auto pt-5 h-[300px] w-full' src={image_url} alt="" />
                  <h1 className='text-center font-bold text-xl py-5'>{wedding_category}</h1>
              </div>
        </div>
    );
};

SingleWedding.propTypes={
    wedding:PropTypes.object.isRequired,
}

export default SingleWedding;