import PropTypes from 'prop-types'
const PurchaseCard = ({detail}) => {
    const{img,price,name,title,short_description}=detail
    return (
        <div className='w-[80%] mx-auto mt-7'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className='font-bold'>{name}</h2>
    <h2 className="card-title">{title}</h2>
    <p className='text-[12px] text-gray-400'>{short_description}</p>
    <h2 className='font-semibold text-xl '>Price:${price}</h2>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
    );
};
PurchaseCard.propTypes={
    detail:PropTypes.object.isRequired,
}
export default PurchaseCard;