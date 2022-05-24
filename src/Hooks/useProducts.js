import { useEffect, useState } from "react";


const useProducts = (url) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }, [url]);
    return [products, setProducts];
};

export default useProducts;