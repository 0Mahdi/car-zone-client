import { useEffect, useState } from "react";

const useCars = () => {
    const [car, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://car-zone-server-0mahdi.vercel.app/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            });
    }, [])
    return [car, loading]
}

export default useCars;

// import { useEffect, useState } from "react";

// const useCars = () => {
//     const [car, setCars] = useState([]);
//     const [loading, setLoading] = useState(true)
//     useEffect(() =>{
//         fetch('https://car-zone-server-0mahdi.vercel.app/cars')
//         .then(res => res.json())
//         .then(data => {
//             setCars(data);
//             setLoading(false);
//         });
//     }, [])
//     return [car, loading]
// };

// export default useCars;