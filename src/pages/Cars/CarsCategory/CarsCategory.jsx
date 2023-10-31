import AllCars from "../../Shared/AllCars/AllCars";

const CarsCategory = ({items}) => {
    return (
        <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    items.map(item=> <AllCars
                        key={item._id} 
                        item={item}
                    ></AllCars>)
                }
            </div>
        </div>
    );
};

export default CarsCategory;