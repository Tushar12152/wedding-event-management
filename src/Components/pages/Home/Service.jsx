import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    // console.log(service)
    const{id,img,name,title,short_description,price}=service
    return (
        <div>
              <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className='font-bold'>{name}</h2>
    <h2 className="card-title">{title}</h2>
    <p className='text-[12px] text-gray-400'>{short_description}</p>
    <h2 className='font-semibold text-xl '>Price:${price}</h2>
    <div className="card-actions justify-end">
      <Link to={`/detail/${id}`}  className="btn btn-primary">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

Service.propTypes={
    service:PropTypes.object.isRequired,
}
export default Service;