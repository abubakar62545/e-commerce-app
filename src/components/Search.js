import React from "react";

const Search = () => {
  return (

      <div className="container-fluid mb-2">
        <div className="row">
          <div className="col-lg-5 offset-lg-3">
            <div className="card my-2">
              <div className="card-header h2 text-center"> Search Bar</div>
              <div className="card-body">
                <input type="text" placeholder="Search.." className='form-control' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Search
