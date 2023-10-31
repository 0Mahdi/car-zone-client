import AllCars from "../../Shared/AllCars/AllCars";

const OrderCars = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <AllCars key={item._id} item={item}></AllCars>)
                        }
                    </div>
    );
};

export default OrderCars;