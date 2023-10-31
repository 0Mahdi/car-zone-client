import { Helmet } from "react-helmet-async";
import PopularCar from "../../PopularCar/PopularCar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Car Dealership | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularCar></PopularCar>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;