import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const AllCars = ({ item }) => {
    const { name, image, price, description, _id} = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
      console.log(item);
      if (user && user.email) {
        const cartItem = {carId: _id, name, image, price, email: user.email}
        fetch('https://car-zone-server-0mahdi.vercel.app/carts',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Car added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order the car',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }
  
    return (
      <div className="w-86 bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center">
        <img src={image} alt={name} className="h-48 w-full object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
            <div className="m-2">
                <a className="mt-4 text-xl font-bold text-indigo-600">${price}</a>
            </div>
            <div>
                <a role="button" onClick={() => handleAddToCart(item)} className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Add to Cart</a>
            </div>
        </div>
      </div>
    );
  };
  
export default AllCars;
