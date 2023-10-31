import{ useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = (e) => {
        e.preventDefault();

        const user = { email: email };

        fetch('https://car-zone-server-0mahdi.vercel.app/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        });
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold">Make An Admin</h2>

            <form onSubmit={handleAdminSubmit} className="flex space-x-4">
                <input
                    type="email"
                    onBlur={handleOnBlur}
                    placeholder="Enter email here"
                    className="input input-bordered input-error w-full max-w-xs"
                />
                <button type="submit" className="btn btn-secondary">Make Admin</button>
            </form>
            {
                success && <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Make Admin Successfully !!</span>
                </div>
            }
        </div>
    );
};

export default MakeAdmin;
