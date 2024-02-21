import { useState, useEffect } from "react";
import { getProducts } from "../lib/queries/getProducts" ;
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Home() {
                                            //fist way to fetch data://
    /**const [products, setProducts] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState();
    useEffect(() => {
        try {
            const response = axios.get("https://dummyjson.com/products");
            if (response.data) {
                setProducts(response.data);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }, []); */
    // tanstack/react-query way to fetch data:

    const {data: products, isLoading, isError} = useQuery({
        queryKey: ["products"],
        // query function
        queryFn: getProducts
    })


    return (
        <div className="px-24 py-8">
            <h1 className="mb-8 p-7 bg-red-400">Home</h1>
            <p>Welcome to the home page!</p>
            <div>
               <h1> Products</h1>
               <div>
                    {isError ? <div>Error fetching data</div>:(<div>
                    {isLoading ? <div className="px-24 py-8">Loading products...</div>:<div></div>}    
                    {products && products.products.map((product, index)=>(
                        <div key={index} className=" flex justify-between  gap-1 border p-4 my-4">
                            <h2>{product.title}  </h2>
                            
                            <Link className="bg-red-400 w-[4rem] text-center p-2 rounded-full hover:bg-red-600 text-white" to={`/product/${product.id}`}>View</Link>
                        </div>)
                    )}
                </div>)}
                
            </div>
            </div>
            
        </div>
    );
}