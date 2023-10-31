
const CarsMenu = ({item}) => {
    const {name, image, price, description} = item;

    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{description}</p>
            </div>
            <p className="text-yellow-700">${price}</p>            
        </div>
    );
};

export default CarsMenu;