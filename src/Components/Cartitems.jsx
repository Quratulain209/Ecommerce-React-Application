import React from 'react'

export default function Cartitems() {
  return (
    <>
   <div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-6">
      <img src="https://i.dummyjson.com/data/products/8/thumbnail.jpg" className="img-fluid" alt="..." />
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
