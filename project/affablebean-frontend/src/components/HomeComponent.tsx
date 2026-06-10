import { Link } from "react-router";

export default function HomeComponent() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">
            Welcome to the online home of the Affable Bean Green Grocer.
          </h3>
          <p className="lead p-3 text-justify text-dark fst-italic">
            Enjoy browsing and learning more about our unique home delivery
            service bringing you fresh organic produce,dairy,meats,breads and
            other delicious and healthy items to you Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repudiandae tenetur aliquam maiores
            aperiam ad! Ex molestiae nemo harum quasi officia quam quidem ea
            autem porro laudantium esse quia eius repudiandae.
          </p>
        </div>
        <div className="col-md-6 mb-3">
          <div className="row">
            <div className="col">
              <Link to="/products/bakery" className="cursor-pointer">
                <img
                  src={"/images/categories/bakery.jpg"}
                  alt="category image"
                  className="img-fluid p-2 rounded shadow-sm"
                />
              </Link>
            </div>
            <div className="col">
              <Link to="/products/dairy" className="cursor-pointer">
                <img
                  src={"/images/categories/dairy.jpg"}
                  alt="category image"
                  className="img-fluid p-2 rounded shadow-sm"
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/products/fruit_veg" className="cursor-pointer">
                <img
                  src={"/images/categories/fruitveg.jpg"}
                  alt="category image"
                  className="img-fluid p-2 rounded shadow-sm"
                />
              </Link>
            </div>
            <div className="col">
              <Link to="/products/meats" className="cursor-pointer">
                <img
                  src={"/images/categories/meats.jpg"}
                  alt="category image"
                  className="img-fluid p-2 rounded shadow-sm"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
