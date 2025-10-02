import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
const Card = () => {
  return (
    <div>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="shoe"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <FaStar className="rating-start" />{" "}
            <FaStar className="rating-start" />{" "}
            <FaStar className="rating-start" />{" "}
            <FaStar className="rating-start" />
            <span className="total-reviews">4</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>

            <div className="bag">
              <FaShoppingBag />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
