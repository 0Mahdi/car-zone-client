import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bg1 from "../../../assets/home/bg/3.jpg";
import m1 from "../../../assets/home/menuImg/1.jpg";
import m2 from "../../../assets/home/menuImg/2.jpg";
import m3 from "../../../assets/home/menuImg/3.jpg";
import m4 from "../../../assets/home/menuImg/4.jpg";
import m5 from "../../../assets/home/menuImg/5.jpg";
import m6 from "../../../assets/home/menuImg/6.jpg";
import m7 from "../../../assets/home/menuImg/7.jpg";
import m8 from "../../../assets/home/menuImg/8.jpg";
import m9 from "../../../assets/home/menuImg/9.jpg";
import m10 from "../../../assets/home/menuImg/10.jpg";
import m11 from "../../../assets/home/menuImg/11.jpg";
import m12 from "../../../assets/home/menuImg/12.jpg";
import useCars from "../../../hooks/useCars";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CarAlls from "../CarAlls/CarAlls";

const CarCategories = () => {
    const [car] = useCars()
    const coming = car.filter(item => item.category === 'coming');
    const bmw = car.filter(item => item.category === 'bmw');
    const mercedes = car.filter(item => item.category === 'mercedes');
    const audi = car.filter(item => item.category === 'audi');
    const toyota = car.filter(item => item.category === 'toyota');
    const tesla = car.filter(item => item.category === 'tesla');
    const jeep = car.filter(item => item.category === 'jeep');
    const ford = car.filter(item => item.category === 'ford');
    const porsche = car.filter(item => item.category === 'porsche');
    const rover = car.filter(item => item.category === 'rover');
    const cadillac = car.filter(item => item.category === 'cadillac');
    const defender = car.filter(item => item.category === 'defender');
    const lamb = car.filter(item => item.category === 'lamb');

    return (
        <div>
            <Helmet>
                <title>Car Dealership | Car Categories</title>
            </Helmet>
            <Cover img={bg1} title="Car Categories"></Cover>
            <SectionTitle subHeading="Fasten The Seat Belt" heading="Coming Soon"></SectionTitle>
            <CarAlls items={coming}></CarAlls>

            <CarAlls items={bmw} title="bmw" img={m1}></CarAlls>
            <CarAlls items={mercedes} title="mercedes" img={m2}></CarAlls>
            <CarAlls items={audi} title="audi" img={m3}></CarAlls>
            <CarAlls items={toyota} title="toyota" img={m4}></CarAlls>
            <CarAlls items={tesla} title="tesla" img={m5}></CarAlls>
            <CarAlls items={jeep} title="jeep" img={m6}></CarAlls>
            <CarAlls items={ford} title="ford mustang" img={m7}></CarAlls>
            <CarAlls items={porsche} title="porsche" img={m8}></CarAlls>
            <CarAlls items={rover} title="range rover" img={m9}></CarAlls>
            <CarAlls items={cadillac} title="cadillac" img={m10}></CarAlls>
            <CarAlls items={defender} title="land rover defender" img={m11}></CarAlls>
            <CarAlls items={lamb} title="lamborghini" img={m12}></CarAlls>
        </div>
    );
};

export default CarCategories;