import React from "react";
import { useParams, Link } from "react-router-dom";
import { acData } from "../data/ac";
import { useCart } from "../context/CartContext";

const AcSingle = () => {
  const { id } = useParams();
    const { addToCart } = useCart();
  const product = acData.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        {/* <div className="ind-section">
          <p>Product not found.</p>
          <Link to="/Ac">Back to AC</Link>
        </div> */}
      </>
    );
  }

  return (
    <>
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt={product.product} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <div className="ind-actions">
             <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
            {/* <Link to="/Ac">
              <button type="button">Back to AC</button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AcSingle;
