import React from "react";

const ProductItem = (props) =>{
  const {name,description,price,images} = props.product
  return(
    <>
   <div className="container">
        <div className="row">

          <div className="col-lg-12 my-5">
            <div className="card text-dark"  >
              <div className='card-header text-center py-2'>
                <h5 className='text-center'>  {name} </h5>
              </div>
              <div className="card-body">
                <div className='text-left '>
                  {images.map((image) => {
                    return <img src={image.image} style={{ 'width': '25rem', 'height': '25rem' }} className='mx-2' alt="Product images" />
                  })}

                </div>
                <p className="lead"> {description}</p>
                <h5>Rs.{price} </h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductItem
