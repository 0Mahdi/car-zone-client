
import { Link } from "react-router-dom";
import CarsMenu from "../../Shared/CarsMenu/CarsMenu";
import Cover from "../../Shared/Cover/Cover";

const CarAlls = ({ items, title, img }) => {
    return (
        <div className="pt-7">
            {title && <Cover img={img} title={title} />}
                <div className="grid md:grid-cols-2 gap-10 my-16">
                    {items.map((item) => (
                        <CarsMenu key={item._id} item={item} />
                    ))}
                </div>
                <Link to={`/cars/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </Link>
        </div>
    );
};

export default CarAlls;

