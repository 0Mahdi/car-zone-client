import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AllCars from "../Shared/AllCars/AllCars";
import useCars from "../../hooks/useCars";

const PopularCar = () => {
    const [car] =useCars();
    const popular = car.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle heading="Popular Cars" subHeading="Discover elegance, performance, and innovation in the world of luxury cars."></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    popular.map(item=> <AllCars key={item._id} item={item}></AllCars>)
                }
            </div>
        </section>
    );
};

export default PopularCar;