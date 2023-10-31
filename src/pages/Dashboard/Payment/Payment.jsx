import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">
                <h1 className="text-2xl font-semibold text-center mt-3">Thank You</h1>
                <h3 className="text-lg text-center my-4">Payment Coming Soon</h3>
                <button className='btn btn-wide btn-outline btn-warning'>
                    <Link to="/">Back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default Payment;