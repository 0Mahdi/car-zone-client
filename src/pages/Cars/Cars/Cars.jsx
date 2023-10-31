import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import carsBgImg from '../../../assets/home/bg/1.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useCars from '../../../hooks/useCars';
import OrderCars from '../OrderCar/OrderCars';
import { useParams } from 'react-router-dom';

const Cars = () => {
    // const categories = [
    //     'bmw', 'mercedes', 'audi', 'toyota', 'tesla', 'jeep', 'ford', 'porsche',
    //     'rover', 'cadillac', 'defender', 'lamb'
    // ];
    // const { category } = useParams();
    // const initialIndex = categories.indexOf(category);
    // const [tabIndex, setTabIndex] = useState(initialIndex);
    // const [car] = useCars();
    const categories = ['bmw', 'mercedes', 'audi', 'toyota', 'tesla', 'jeep', 'ford mustang', 'porsche', 'range rover', 'cadillac', 'land rover defender', 'lamborghini'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [car] = useCars();

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
                <title>Car Dealership | Cars</title>
            </Helmet>
            <Cover 
                img={carsBgImg} 
                title="Car Zone" 
                pra="Car Zone: Your prime source for automotive insights, reviews, and updates. Explore our passion for cars and stay connected with the auto world's latest trends."
            />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                    <Tab>BMW</Tab>
                    <Tab>MERCEDES</Tab>
                    <Tab>AUDI</Tab>
                    <Tab>TOYOTA</Tab>
                    <Tab>TESLA</Tab>
                    <Tab>JEEP</Tab>
                    <Tab>FORD MUSTANG</Tab>
                    <Tab>PORSCHE</Tab>
                    <Tab>RANGE ROVER</Tab>
                    <Tab>CADILLAC</Tab>
                    <Tab>LAND ROVER DEFENDER</Tab>
                    <Tab>LAMBORGHINI</Tab>
                </TabList>
                <TabPanel>
                    <OrderCars items={bmw}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={mercedes}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={audi}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={toyota}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={tesla}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={jeep}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={ford}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={porsche}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={rover}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={cadillac}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={defender}></OrderCars>
                </TabPanel>
                <TabPanel>
                    <OrderCars items={lamb}></OrderCars>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Cars;