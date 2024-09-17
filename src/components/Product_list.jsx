import React from 'react'
import products from './Data'

function Product_list({dark,category,search}) {
  return (
    <div style={{display:"flex",flexWrap:"wrap",background:dark===true?"black":"white"}}> 
        {products.filter(product=>product.title.includes(search)).filter(product=>category!==""?product.category===category:product).map(product=>
      <div className="wrapper"key={product.id}>
  <div className="product-img">
    <img src={product.image} height={450} width={250} />
  </div>
  <div className="product-info">
    <div className="product-text">
      <h3>{product.title}</h3>
      <h5>{product.category}</h5>
      <p>
        {product.description}
      </p>
    </div>
    <div className="product-price-btn">
      <p>
        <span>{product.price}</span>$
      </p>
      <br />
      <button type="button">buy now</button>
    </div>
  </div>
</div>)}

    </div>
  )
}

export default Product_list
