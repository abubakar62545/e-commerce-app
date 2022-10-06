import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getApiProducts from "../Api/Api";
const Products = () => {
  const [products,setProdcuts] = useState([])
  const [mount,setMount] = useState(true)

  useEffect(() => {
        getApiProducts().then(result=> {setProdcuts(result)
          setMount(false)
        })
  }, []);

  if(mount===true){
    return (<div>Loading...............
    </div>);
  }
  else{
    return (
      <div className="container">
        <div className="row">
          {
            products.map((product, index) => {
              return (
                <div className="col-lg-4 my-2" key={index}>
                 <Link to={'/product/'+product.id} className='nav-link'>
                  <div className="card text-dark" style={{ 'width': '25rem' }} >
                    <div className="card-body">
                      <div className='text-left '>
                        <img src={product.images[0].image} style={{ 'width': '23rem', 'height': '18rem' }} />
                      </div>
                      <h5>Rs.{product.price} </h5>
                      <div className='card-footer text-center py-2'>
                        <h5 className='text-center'>  {product.name} </h5>
                      </div>
                    </div>
                  </div>
                 </Link>
                </div>
              )
            })
          }
        </div>
      </div>
  )
  }

}

export default Products
