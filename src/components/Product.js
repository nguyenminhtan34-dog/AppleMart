import { NavLink } from "react-router-dom";
import data from "../data";
const Product = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className=" container">
        <div className="row justify-content-around ">
          {data.map((item) => {
            return (
              <div
                class="card mb-4 text-center"
                key={item.id}
                style={{ width: "18rem" }}
              >
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">${item.price}</p>
                  <NavLink
                    to={`/product/${item.id}`}
                    class="btn btn-outline-primary"
                  >
                    Buy now
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Product;
